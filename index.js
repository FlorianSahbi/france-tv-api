const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


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
}, {
    matchId: 2,
    title: 'Lorem ipsum dolor',
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
}]


// const matches = require('./routes/scraperRoutes');
// const cameras = require('./routes/searchRoutes');
// const auth = require('./routes/userRoutes');
// const controls = require('./routes/uploadRoutes');

// app.use('/api/match', matches);
// app.use('/api/camera', cameras);
// app.use('/api/auth', auth);
// app.use('/api/controls', controls);


app.get('/api/controls/:actionId', (req, res) => {

    const { actionId } = req.params;

    response = {
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/controls/${actionId}`,
        actionId
    }

    switch (actionId) {
        case '0':
            console.log({ event: 'Play' });
            io.emit('play', { action: actionId, description: 'Play' });
            break;

        case '1':
            console.log({ event: 'Pause' });
            io.emit('pause', { action: actionId, description: 'Pause' });
            break;

        case '2':
            console.log({ event: 'Random' });
            io.emit('random', { action: actionId, description: 'Random' });
            break;

        case '3':
            console.log({ event: 'zoomIn' });
            io.emit('zoomIn', { action: actionId, description: 'zoomIn' });
            break;

        case '4':
            console.log({ event: 'zoomOut' });
            io.emit('zoomOut', { action: actionId, description: 'zoomOut' });
            break;

        case '5':
            console.log({ event: 'switchTeam' });
            io.emit('switchTeam', { action: actionId, description: 'switchTeam' });
            break;
    }

    res.status(200).json(response);
});

app.get('/api/camera/:cameraId', (req, res) => {

    const { cameraId } = req.params;

    response = {
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/camera/${cameraId}`,
        cameraId
    }
    console.log({ event: `Show camera ${cameraId}` })
    io.emit('play', response);
    res.status(200).json(response);
});

app.get('/api/auth/:pseudo', (req, res) => {

    const { pseudo } = req.params;

    response = {
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/auth/${pseudo}`,
        pseudo
    }

    res.status(200).json(response);
});

app.get('/api/matches/', (req, res) => {

    const response = {
        matches: matches[matchId],
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/matches`,
    }

    console.log({ event: `Show matches` })
    io.emit('show current match', matches);
    res.status(200).json(response);
});

app.get('/api/match/:matchId', (req, res) => {

    const { matchId } = req.params;

    const response = {
        match: matches[matchId],
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/match/${matchId}`,
    }

    if (matches.length - 1 < matchId) {
        res.status(404).json({ message: `Error : This match doesnt exists` })
    } else if (matchId < 0) {
        res.status(404).json({ message: `Error : Can't use negative numbers` })
    } else {
        console.log({ event: `Show match ${matchId}` })
        io.emit('show match', response);
        res.status(200).json(response);
    }
});

app.get('/api/match/', (req, res) => {
    let random = Math.floor(Math.random() * ((matches.length - 1) - 0) + 0);

    response = {
        match: matches[random],
        message: `Request has been handled sucessfully`,
        code: 200,
        url: `/api/match`,
    }

    console.log({ event: `Show current match` })
    io.emit('show current match', response);
    res.status(200).json(response)
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('helloworld', data => {
        console.log(data);
    })
});

http.listen(process.env.PORT || 3100);
