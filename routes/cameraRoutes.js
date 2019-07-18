'use strict';

const app = require('express');
const router = app.Router();

const camerasController = require('../controllers/camerasController');

router.route('/direct')
    .get(camerasController.getDirect);

router.route('/all')
    .get(camerasController.getAllCamera);
    
router.route('/:cameraId')
    .get(camerasController.getCamera);



module.exports = router;
