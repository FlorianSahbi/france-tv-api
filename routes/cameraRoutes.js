'use strict';

const app = require('express');
const router = app.Router();

const camerasController = require('../controllers/camerasController');

router.route('/:cameraId')
    .get(camerasController.getCamera);

router.route('/direct')
    .get(camerasController.getDirect);

module.exports = router;
