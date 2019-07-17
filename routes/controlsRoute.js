'use strict';

const express = require('express');
const router = express.Router();

const routesController = require('../controllers/routesController');

router.route('/:conversationId')
    .get(conversationController.getOneConversationAction);

module.exports = router;
