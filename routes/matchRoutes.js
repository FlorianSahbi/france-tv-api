'use strict';

const app = require('express');
const router = app.Router();

const matchesController = require('../controllers/matchesController');

router.route('/')
    .get(matchesController.getCurrentMatch);

router.route('/:matchId')
    .get(matchesController.getOneMatchById);

router.route('/all')
    .get(matchesController.getAllMatches);

router.route('/switch')
    .get(matchesController.switchMatch);

module.exports = router;
