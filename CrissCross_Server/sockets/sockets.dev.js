
var sockets = {}

async function setSocketId(userId, socketId) {
    sockets[userId] = socketId
}

async function getSocketId(userId) {
    return sockets[userId]
}

function deleteSocketId(userId) {
    delete sockets[userId]
}


function methods() { }


function init(io) {

    io.on('connection', (socket) => {
        var handshake = socket.handshake.query

        if (handshake.userId == undefined) {
            return
        }

        setSocketId(handshake.userId, socket.id)

        console.log(`@SOCKET::connected userId: ${handshake.userId} socketId: ${socket.id}`)

        socket.on('disconnect', () => {
            console.log(`@SOCKET::disconnect userId: ${handshake.userId} socketId: ${socket.id}`)

            deleteSocketId(handshake.userId)
        })

    })


    methods.emitToUser = async (userId, event, data) => {
        let socketId = await getSocketId(userId)

        io.to(socketId).emit(event, data)
    }

}


module.exports = {
    init: init,
    methods: methods
}