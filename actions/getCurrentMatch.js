'use strict';

const matches = [{
    matchId: 0,
    title: `Le match du tournoi européen de qualification olympique, qui oppose l'équipe de Rennes à l'équipe de Toulouse.`,
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
    title: `Le match du tournoi européen de qualification olympique, qui oppose l'équipe de Rennes à l'équipe de Toulouse.`,
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

class getCurrentMatch {

    constructor() { }

    getCurrentMatch(io, res) {
        let random = Math.floor(Math.random() * ((matches.length - 1) - 0) + 0);

        let response = {
            match: matches[random],
            message: `Request has been handled sucessfully`,
            code: 200,
            url: `/api/match`,
        }

        console.log({ event: `Show current match` })
        io.emit('show current match', response);
        res.status(200).json(response)
    }
}
module.exports = new getCurrentMatch();