const redis = require("redis");
const { promisify } = require("util");
const redisAdapter = require('socket.io-redis');

const redisClient = redis.createClient({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT });
const getAsync = promisify(redisClient.get).bind(redisClient);
const USER_MAP_PREFIX = 'USERMAP'


//#region redis helpers
async function setSocketId(userId, socketId) {
    redisClient.set(`${USER_MAP_PREFIX}_${userId}`, socketId, 'EX', 3600 * 6)
}

async function getSocketId(userId) {
    return await getAsync(`${USER_MAP_PREFIX}_${userId}`)
}

function deleteSocketId(userId) {
    redisClient.del(`${USER_MAP_PREFIX}_${userId}`)
}
//#endregion


//#region sockets
function methods() { }


function init(io) {

    io.adapter(redisAdapter({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT }));


    io.on('connection', (socket) => {
        var handshake = socket.handshake.query

        if (handshake.userId == undefined) {
            return
        }

        setSocketId(handshake.userId, socket.id)

        console.log(`@SOCKET::connected userId: ${handshake.userId} socketId: ${socket.id}`)

        socket.on('disconnect', () => {
            console.log(`@SOCKET::disconnected userId: ${handshake.userId} socketId: ${socket.id}`)

            deleteSocketId(handshake.userId)
        })

    })


    methods.emitToUser = async (userId, event, data) => {
        try {
            let socketId = await getSocketId(userId)
            io.to(socketId).emit(event, data)
        } catch (e) {

        }
    }

}
//#endregion

module.exports = {
    init: init,
    methods: methods
}