/**
 * CrissCross
 * 2020
 */

const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const SocketIO = require('socket.io')

dotenv.config()
const db = require('./models/init')


async function start() {
    await db.init()

    const app = express()
    const server = http.createServer(app)


    //#region middleware
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ limit: '70mb', extended: true }))
    //#endregion


    //#region routes
    const IndexRouter = require('./calls/index')
    const UserRouter = require('./calls/users/calls')
    const CardRouter = require('./calls/cards/calls')
    const AuthRouter = require('./calls/auth/calls')

    app.use('', IndexRouter)
    app.use('/auth', AuthRouter)
    app.use('/users', UserRouter)
    app.use('/cards', CardRouter)
    //#endregion


    //#region sockets
    const sockets = require('./sockets/index')
    const io = SocketIO(server)
    sockets.init(io)
    //#endregion


    const PORT = process.env.PORT || 3000
    const HOST = '127.0.0.1';

    server.listen(PORT, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });

}



module.exports = { start: start }


if (process.env.MODE === 'DEVELOP') {
    start()
}
