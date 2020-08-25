
let socket;

if (process.env.MODE == 'DEVELOP') {
    socket = require('./sockets.dev')
} else if (process.env.MODE == 'PRODUCTION') {
    socket = require('./sockets.prod')
}

module.exports = socket
