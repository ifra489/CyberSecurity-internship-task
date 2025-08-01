# Login Application (MERN Stack)

![ScreenShot Tool -20250107043508](https://github.com/user-attachments/assets/c1cfddea-af89-4f62-8d39-bd8baf882cf1)

## Project Overview

This is a simple Login and Registration system built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** templating engine. It allows users to register, log in, and access a dashboard page after successfully logging in. This project demonstrates how to create a secure authentication system with password hashing and user data management using MongoDB.

<div align="center">
  <h3> Contributed Using These Languages </h3>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" alt="JavaScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="HTML5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" alt="CSS3" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/express/express-original.svg" height="30" alt="Express" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/docker/docker-original.svg" height="30" alt="Docker" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/nodejs/nodejs-plain-wordmark.svg" height="30" alt="NodeJS" />
  <img src="https://github.com/devicons/devicon/blob/v2.16.0/icons/mongodb/mongodb-plain-wordmark.svg" height="30" alt="mongodb" />
</div>

<br>

The project covers essential aspects of web development, such as user authentication, data validation, form handling, and error handling. It follows common practices for building secure, scalable web applications with JavaScript.

## Features

- **User Registration**: Allows users to create an account with a unique username and secure password.
- **User Login**: Authenticates users by checking credentials and comparing hashed passwords in MongoDB.
- **Dashboard**: After login, users are redirected to a dashboard displaying their name.
- **Password Hashing**: Passwords are hashed using **bcryptjs** before storing in the database.
- **Validation & Error Handling**: Catches invalid inputs and provides user-friendly feedback.
- **Session Management**: JWT is used to manage session logic securely.


## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **bcryptjs**
- **EJS**
- **Helmet**
- **jsonwebtoken**
- **Validator.js**

## Security Notes
- Passwords are hashed using bcrypt before storage.
- HTTP headers are secured using helmet middleware.
- Input validation implemented to prevent injection attacks.
- Sensitive data is stored using environment variables.



## Project Structure

. ├── config.js
├── index.js
├── package.json
├── package-lock.json
├── node_modules/
├── public/
│ └── styles.css
└── views/
├── login.ejs
├── register.ejs
└── dashboard.ejs


## How to Run the Project

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)

### Steps

```bash
git clone https://github.com/ifra489/CyberSecurity-internship-task.git
cd CyberSecurity-internship-task
npm install
```
1.Update MongoDB URI in config.js

2.Run the app:

```
npm start
```
**Visit http://localhost:3000 to use the app.**

## Verifying with MongoDB
Use the MongoDB shell or Compass:
```
use Credentials
show collections
db.users.find().pretty()

```
## Acknowledgement
This project was adapted from an open-source Express.js authentication system.
The original repository/author is currently unknown. If identified, proper credit will be added.

This version includes customizations and security enhancements for a Cybersecurity internship task.
