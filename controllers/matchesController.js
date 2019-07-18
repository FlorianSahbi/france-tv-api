'use strict';

const getAllMatches = require('../actions/getAllMatches');
const getCurrentMatch = require('../actions/getCurrentMatch');
const getOneMatchById = require('../actions/getOneMatchById');
const switchMatch = require('../actions/switchMatch');

exports.getCurrentMatch = (req, res) => {
    getCurrentMatch.getCurrentMatch(req.io, res);
}

exports.getOneMatchById = (req, res) => {
    const { matchId } = req.params;
    getOneMatchById.getOneMatchById(matchId, req.io, res);
}

exports.getAllMatches = (req, res) => {
    getAllMatches.getAllMatches(req.io, res);
}

exports.switchMatch = (req, res) => {
    switchMatch.switchMatch(req.io, res);
}