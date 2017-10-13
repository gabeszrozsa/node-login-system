const express = require('express');
const router = express.Router();

const User = require('../models/user');

// NOTE: Register
router.get('/register', function(req, res) {
  res.render('register');
});

// NOTE: Login
router.get('/login', function(req, res) {
  res.render('login');
});

// NOTE: Register user
router.post('/register', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;

  // NOTE: validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    res.render('register', { errors } );
  } else {
    const newUser = new User({
      name,
      email,
      username,
      password
    });

    User.createUser(newUser, function(err, user) {
      if (err) {
        throw err;
        console.log(err);
      }
    });

    req.flash('success_msg', 'You are registered and can now login');
    res.redirect('login');
  }
});

module.exports = router;
