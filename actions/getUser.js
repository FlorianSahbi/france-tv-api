'use strict';

class getUser {

    constructor() { }

    getUser(pseudo, io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/auth/${pseudo}`,
            pseudo
        }

        res.status(200).json(response);
    }
}
module.exports = new getUser();