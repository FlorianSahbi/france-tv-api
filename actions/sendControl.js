'use strict';


class sendControl {

    constructor() { }

    responseBuilder(eventName, io, actionId, response) {
        console.log({ event: eventName });
        io.emit(eventName, { action: actionId, description: eventName });
        response.action = eventName;
    }

    sendControl(actionId, io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/controls/${actionId}`,
            action: null,
            actionId
        }

        switch (actionId) {
            case '0': this.responseBuilder('play', io, actionId, response); break;
            case '1': this.responseBuilder('pause', io, actionId, response); break;
            case '2': this.responseBuilder('random', io, actionId, response); break;
            case '3': this.responseBuilder('zoomIn', io, actionId, response); break;
            case '4': this.responseBuilder('zoomOut', io, actionId, response); break;
            case '5': this.responseBuilder('forward', io, actionId, response); break;
            case '6': this.responseBuilder('backward', io, actionId, response); break;
            case '7': this.responseBuilder('switch match', io, actionId, response); break;
            case '8': this.responseBuilder('direct', io, actionId, response); break;
        }
        res.status(200).json(response);
    }
}
module.exports = new sendControl();
