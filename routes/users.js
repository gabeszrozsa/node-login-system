const express = require('express');
const router = express.Router();

// NOTE: Register
router.get('/register', function(req, res) {
  res.render('register');
});

// NOTE: Login
router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;
