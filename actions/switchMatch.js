'use strict';

class switchMatch {

    constructor() { }

    switchMatch(io, res) {
        console.log({ action: "switch match" });
        io.emit('switch match', { action: "switch match" });
        res.status(200).json({ action: "switch match" })
    }
}
module.exports = new switchMatch();