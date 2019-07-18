'use strict';

class getCamera {

    constructor() { }

    getCamera(cameraId, io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/camera/${cameraId}`,
            cameraId
        }
        console.log({ event: `show camera ${cameraId}` })
        io.emit('show camera', response);
        res.status(200).json(response);
    }
}
module.exports = new getCamera();