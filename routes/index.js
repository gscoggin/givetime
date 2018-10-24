const express = require('express');
const api = require('./api');
const charities = require('./charities');
const path = require('path');
const router = express.Router();

router.use('/api', api);
router.use('/charities', charities);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;