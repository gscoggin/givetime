const express = require('express');
const charities = require('./charities');
const users = require('./users');
const events = require('./events');
const auth = require('./auth');
const router = express.Router();

//API routes
router.use('/api', users);
router.use('/api', events);
router.use('/api', charities);

module.exports = router;