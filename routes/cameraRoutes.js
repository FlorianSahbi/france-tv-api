'use strict';

const app = require('express');
const router = app.Router();

const camerasController = require('../controllers/camerasController');

router.route('/direct')
    .get(camerasController.getDirect);

router.route('/:cameraId')
    .get(camerasController.getCamera);


module.exports = router;
