'use strict';

const express = require('express');
const router = express.Router();

const routesController = require('../controllers/routesController');

// OK -
router.route('/:conversationId')
    .get(conversationController.getOneConversationAction);

// OK -
router.route('/user/:userId')
    .get(conversationController.getAllUserConversationAction);
    
// NEW -
router.route('/user/:userId/:skip')
    .get(conversationController.loadMoreConversationsAction);

// NEW -
router.route('/limit/:limit/user/:userId')
    .get(conversationController.getPopulatedConvByUserIdWithLimit);
        
// OK -
router.route('/group/:groupId')
    .get(conversationController.getAllGroupConversationAction);

// OK -
router.route('/:userId/unreadConversations')
    .get(conversationController.getUnreadConversationsAction);

module.exports = router;
