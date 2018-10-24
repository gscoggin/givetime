const path = require("path");
const router = require("express").Router();
const express = require('express');
const users = require('./users');
const events = require('./events');

// API Routes
router.use('/users', users);
router.use('/events', events);

module.exports = router;
