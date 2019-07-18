'use strict';

const app = require('express');
const router = app.Router();

const controlsController = require('../controllers/controlsController');

router.route('/:actionId')
    .get(controlsController.sendControl);

module.exports = router;
