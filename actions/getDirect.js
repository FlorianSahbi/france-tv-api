'use strict';

class getDirect {

    constructor() { }

    getDirect(io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/camera/direct`,
        }

        io.emit('direct', { action: 'Direct', description: 'Direct' })
        res.status(200).json(response);
    }
}
module.exports = new getDirect();