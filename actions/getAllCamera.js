'use strict';

class getAllCamera {

    constructor() { }

    getAllCamera(io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/camera/all`,
        }
        console.log({ event: `show camera all camera` })
        io.emit('show mosaique', response);
        res.status(200).json(response);
    }
}
module.exports = new getAllCamera();