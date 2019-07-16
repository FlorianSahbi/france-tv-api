const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const user = {
    pseudo: 'John'
};
const matches = [{
    matchId: 0,
    title: 'A.Cornet - M.Trevisan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices nec nulla ut vulputate. Duis ut turpis vel felis scelerisque lobortis. Maecenas sed felis quis leo interdum sollicitudin nec placerat neque. Phasellus tempor massa quis scelerisque dapibus. Donec egestas, sapien nec pulvinar rhoncus, nulla orci blandit lacus, vel euismod massa nisi ac urna. Integer eget ipsum a nisi varius euismod. Sed cursus ligula vitae arcu vestibulum, sed lacinia metus commodo.',
    players: [{
        firstName: 'alize',
        lastName: 'cornet',
        country: 'FR'
    }, {
        firstName: 'martina',
        lastName: 'trevisan',
        country: 'IT'
    }],
    sport: 'tennis',
    location: 'lausanne',
    competition: 'WTA Tour'
}, {
    matchId: 1,
    title: 'C.Perrin - N.Vikhlyantseva',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices nec nulla ut vulputate. Duis ut turpis vel felis scelerisque lobortis. Maecenas sed felis quis leo interdum sollicitudin nec placerat neque. Phasellus tempor massa quis scelerisque dapibus. Donec egestas, sapien nec pulvinar rhoncus, nulla orci blandit lacus, vel euismod massa nisi ac urna. Integer eget ipsum a nisi varius euismod. Sed cursus ligula vitae arcu vestibulum, sed lacinia metus commodo.',
    players: [{
        firstName: 'conny',
        lastName: 'perrin',
        country: 'SU'
    }, {
        firstName: 'natalia',
        lastName: 'vikhlyantseva',
        country: 'RU'
    }],
    sport: 'tennis',
    location: 'lausanne',
    competition: 'WTA Tour'
},]

app.get('/api/controls/:actionId', function (req, res) {

    const { actionId } = req.params;

    response = {
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/controls/${actionId}`,
        actionId
    }

    switch (action) {
        case 0:
            socket.emit('play', { action, description: 'Play' });
            break;

        case 1:
            socket.emit('pause', { action, description: 'Pause' });
            break;

        case 2:
            socket.emit('random', { action, description: 'Random' });
            break;
    }

    res.status(200).json(response);
});

app.get('/api/camera/:cameraId', function (req, res) {

    const { cameraId } = req.params;

    response = {
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/camera/${cameraId}`,
        cameraId
    }

    res.status(200).json(response);
});

app.get('/api/auth/:pseudo', function (req, res) {

    const { pseudo } = req.params;

    if (pseudo.toLowerCase() === user.toLowerCase()) {
        response = {
            message: `Authorized user`,
            code: 200,
            url: `/api/auth/${pseudo}`,
            pseudo
        }

        res.status(200).json(response);
    } else {
        response = {
            message: `Unauthorized user`,
            code: 401,
            url: `/api/auth/${pseudo}`,
            pseudo
        }

        res.status(401).json(response);
    }

});

app.get('/api/matches/', function (req, res) {
    res.status(401).json(matches);
});

app.get('/api/match/:matchId', function (req, res) {

    const { matchId } = req.params;

    if (matches.length - 1 < matchId) {
        res.status(404).json({ message: `Error : This match doesnt exists` })
    } else if (matchId < 0) {
        res.status(404).json({ message: `Error : Can't use negative numbers` })
    } else {
        res.status(200).json({ match: matches[matchId] });
    }
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(process.env.PORT || 3100)