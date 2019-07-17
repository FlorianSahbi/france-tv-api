'use strict';

const signUp = require('../actions/auth/signUp');
const signInFacebook = require('../actions/auth/signInFacebook');
const signIn = require('../actions/auth/signIn');
const checkMail = require('../actions/auth/checkMail');
const autoLogin = require('../actions/auth/autoLogin');
const autologinTemporaire = require('../actions/auth/autologinTemporaire');
const loginAdmin = require('../actions/auth/loginAdmin');


// OK
exports.signUpAction = (req, res) => {
    const { firstName, lastName, email, password, facebookId, valideCode } = req.body;
    signUp.signUp(firstName, lastName, email, password, facebookId, valideCode, res);
}

exports.signInFbAction = (req, res) => {
    const { id, accessToken } = req.body;
    signInFacebook.signInFacebook(id, accessToken, res)
}

// OK
exports.signInAction = (req, res) => {
    const { email, password } = req.body;
    signIn.signIn(email, password, res);
}

exports.checkMailAction = (req, res) => {
    const { email, valideCode } = req.body;
    checkMail.checkMail(email, valideCode, res);
}

exports.autoLoginAction = (req, res) => {
    const { email, valideCode } = req.body;
    autoLogin.autoLogin(email, valideCode, res);
}

exports.autologinTemporaireAction = (req, res) => {
    const { email, valideCode } = req.body;
    autologinTemporaire.autologinTemporaire(email, valideCode, res);
}

exports.loginAdminAction = (req, res) => {
    const { email, password } = req.body;
    loginAdmin.loginAdmin(email, password, res);
}