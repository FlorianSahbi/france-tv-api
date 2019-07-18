'use strict';

const app = require('express');
const router = app.Router();

const authController = require('../controllers/authController');

router.route('/:pseudo')
    .get(authController.getUser);

module.exports = router;
