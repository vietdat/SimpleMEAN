const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const users = require('./users.server.routes.js');

module.exports = users(router);
