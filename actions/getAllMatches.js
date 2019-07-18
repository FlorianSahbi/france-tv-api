'use strict';

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


class getAllMatches {

    constructor() { }

    getAllMatches(io, res) {
        const response = {
            matches: matches,
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/matches`,
        }

        console.log({ event: `Show matches` })
        io.emit('show current match', matches);
        res.status(200).json(response);
    }
}
module.exports = new getAllMatches();