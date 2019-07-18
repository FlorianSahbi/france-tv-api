'use strict';

const getUser = require('../actions/getUser');

exports.getUser = (req, res) => {
    const { pseudo } = req.params;
    getUser.getUser(pseudo, req.io, res);
}
