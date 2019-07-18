'use strict';


class sendControl {

    constructor() { }

    sendControl(actionId, io, res) {
        let response = {
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/controls/${actionId}`,
            action: null,
            actionId
        }

        switch (actionId) {
            case '0':
                console.log({ event: 'Play' });
                io.emit('play', { action: actionId, description: 'Play' });
                response.action = 'Play';
                break;

            case '1':
                console.log({ event: 'Pause' });
                io.emit('pause', { action: actionId, description: 'Pause' });
                response.action = 'Pause';
                break;

            case '2':
                console.log({ event: 'Random' });
                io.emit('random', { action: actionId, description: 'Random' });
                response.action = 'Random';
                break;

            case '3':
                console.log({ event: 'zoomIn' });
                io.emit('zoomIn', { action: actionId, description: 'zoomIn' });
                response.action = 'zoomIn';
                break;

            case '4':
                console.log({ event: 'zoomOut' });
                io.emit('zoomOut', { action: actionId, description: 'zoomOut' });
                response.action = 'zoomOut';
                break;

            case '5':
                console.log({ event: 'switchTeam' });
                io.emit('switchTeam', { action: actionId, description: 'switchTeam' });
                response.action = 'switchTeam';
                break;

            case '6':
                console.log({ event: 'forward' });
                io.emit('forward', { action: actionId, description: 'forward' });
                response.action = 'forward';
                break;

            case '7':
                console.log({ event: 'backward' });
                io.emit('backward', { action: actionId, description: 'backward' });
                response.action = 'backward';
                break;
        }

        res.status(200).json(response);

    }


}
module.exports = new sendControl();