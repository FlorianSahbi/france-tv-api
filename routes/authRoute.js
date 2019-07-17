'use strict';

const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.route('/:pseudo')
    .get(authController.getOneConversationAction);

module.exports = router;
