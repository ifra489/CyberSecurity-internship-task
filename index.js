const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const jwt=require('jsonwebtoken');
const validator=require('validator');
const config = require('./config');
const logger=require('./logger')
let currentUser=null;
const app = express();
const helment=require('helmet');

// Middleware
app.use(helment()); //secure HTTP headers
app.get('/check-headers',(_req,res)=>{
  res.send('helment headers test route');
});

  

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mongoose Model
const User = mongoose.model('users', new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: "" }
}));

// MongoDB Connect
mongoose.connect(config.mongodb.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Multer Upload Setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// 🟢 Login Page
app.get('/', (req, res) => {
  res.render('login', { errorMessage: null });
});

// 🟢 Register Page
app.get('/register', (req, res) => {
  const error = req.query.error;
  const status = req.query.status;
  let errorMessage = null;

  if (error === 'not-registered') {
    errorMessage = 'User not registered. Please create an account.';
  } else if (error === 'already-exists') {
    errorMessage = 'Username already exists.';
  }
console.log("Register Get route called");
   res.render('register', { errorMessage, status });
});

// 🟢 Register Post
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log("📝 Register Attempt:", username, password); // 👉 ADD THIS
  if(!validator.isAlphanumeric(username)){
    return res.status(400).send('invalid characters in username');
  }
  
  if (username.length < 3 || password.length < 6) {
    console.log("Validation failed");
    return res.render('register', { errorMessage: 'Username min 3 and Password min 6 characters.', status: null });
  }

  const existingUser = await User.findOne({ username: username.toLowerCase() });
  if (existingUser) {
    console.log("user already existed");
    return res.redirect('/register?error=already-exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await new User({ username: username.toLowerCase(), password: hashedPassword }).save();
console.log("Registration Succesfully");
  return res.redirect('/register?status=success');
});

// 🟢 Login Post

app.post('/login', async (req, res) => {
  console.log('login attempt',req.body.username);
  const { username, password } = req.body;
if (!validator.isAlphanumeric(username)) {
  return res.status(400).send('Invalid characters in username');
}
  console.log("Login Attempt,username");
  const user = await User.findOne({ username: username.toLowerCase() });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    console.log(" login  failed");
    return res.redirect('/register?error=not-registered');
  }
  const token=jwt.sign({
    id:user._id,username:user.username},
    'ifra_secret_key_1234',
    {expiresIn:'1h'}
  );
  console.log("JWT Token",token)
console.log('login sucessfully,rendering dashboard');
currentUser=user;
  res.render('dashboard', { username: user.username });
});

// 🟢 Profile Page
app.get('/profile', async (req, res) => {
  console.log("profile page called");
  const user = await User.findOne(); // Later replace with session logic
  res.render('profile', { user:currentUser});
});

// 🟢 Profile Picture Upload
app.post('/upload', upload.single('profilePic'), async (req, res) => {
  
  const user = await User.findOne(); // Replace later with session
  if (user) {
    currentUser.profilePic = req.file.filename;
    await currentUser.save();
  }
  res.redirect('/profile');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(500).send('Something went wrong.');
});

// Server Start
const port =3000;
app.listen(port, () => {
  logger.info('Application started');
  console.log( `Server running at http://localhost:${port}`);
});