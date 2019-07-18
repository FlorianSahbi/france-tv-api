'use strict';

const sendControl = require('../actions/sendControl');

exports.sendControl = (req, res) => {
    const { actionId } = req.params;
    sendControl.sendControl(actionId, req.io, res);
}
