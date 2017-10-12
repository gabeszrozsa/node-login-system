const express = require('express');
const router = express.Router();

// NOTE: Homepage
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
