'use strict';

const express = require('express');
const router = express.Router();

const conversationController = require('../controllers/conversationController');

router.route('/:conversationId')
    .get(conversationController.getOneConversationAction);

module.exports = router;
