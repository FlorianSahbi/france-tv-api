'use strict';

const getCamera = require('../actions/getCamera');
const getDirect = require('../actions/getDirect');
const getAllCamera = require('../actions/getAllCamera');

exports.getCamera = (req, res) => {
    const { cameraId } = req.params;
    getCamera.getCamera(cameraId, req.io, res);
}

exports.getDirect = (req, res) => {
    getDirect.getDirect(req.io, res);
}

exports.getAllCamera = (req, res) => {
    getAllCamera.getAllCamera(req.io, res);
}