# 🔐 Login Application (MERN Stack)

![Login Screenshot](https://github.com/user-attachments/assets/c1cfddea-af89-4f62-8d39-bd8baf882cf1)

## 📌 Overview

A simple and secure Login & Registration system built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**. Users can register, log in, and access a dashboard. This project demonstrates secure authentication practices using bcrypt, JWT, and validation.

---

<div align="center">
  <h3>🔧 Built With</h3>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/express/express-original.svg" height="30" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/nodejs/nodejs-plain-wordmark.svg" height="30" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/mongodb/mongodb-plain-wordmark.svg" height="30" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/docker/docker-original.svg" height="30" />
</div>

---

## ✅ Features

- 🔐 **Secure User Registration & Login**
- 📄 **Hashed Passwords (bcryptjs)**
- 🧠 **Session Management with JWT**
- 🔍 **Input Validation with validator.js**
- 🔒 **Security Headers with Helmet**
- 📦 **MongoDB Integration with Mongoose**
- 🧰 **Modular Project Structure**

---

## 🧪 Security Highlights

- Passwords hashed using **bcrypt**.
- Secure headers via **Helmet** middleware.
- Inputs sanitized and validated.
- Environment variables used for sensitive config.
- JWT tokens used for session control.

---

## 🗂️ Project Structure

```
.
├── config.js             # MongoDB connection
├── index.js              # Main app logic & routes
├── package.json          # Dependencies & metadata
├── package-lock.json     # Dependency lock
├── node_modules/         # Installed packages
├── public/
│   └── styles.css        # Custom styling
└── views/
    ├── login.ejs         # Login page
    ├── register.ejs      # Registration page
    └── dashboard.ejs     # Post-login dashboard
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 🛠️ Setup

```bash
git clone https://github.com/ifra489/CyberSecurity-internship-task.git
cd CyberSecurity-internship-task
npm install
```

1. Set your MongoDB connection URI inside `config.js`.
2. Start the server:

```bash
npm start
```

🔗 Visit: [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Verifying MongoDB Data

You can verify users in MongoDB using the shell or MongoDB Compass:

```bash
use Credentials
show collections
db.users.find().pretty()
```

---

## 🙏 Acknowledgement

This project was adapted from an existing Express-based authentication project.  
The original author is unknown; if identified, full credit will be added.

> ✨ Customized for a **Cybersecurity Internship Task** with added security enhancements and structure.
