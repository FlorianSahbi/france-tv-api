'use strict';

const getCamera = require('../actions/getCamera');

exports.getCamera = (req, res) => {
    const { cameraId } = req.params;
    getCamera.getCamera(cameraId, req.io, res);
}