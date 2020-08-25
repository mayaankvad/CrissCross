const CardFunctions = require('../../models/Cards')
const socket = require('../../sockets/index')


function CardHelpers() { }


CardHelpers.create = async (scanner, scanee) => {
    var create = await CardFunctions.create(scanner, scanee)

    // notify scanee via socket
    socket.methods.emitToUser(scanee, 'new_card', { card: create.forScannee })

    // return scanee card to scanner
    return create.forScanner
}


CardHelpers.findList = async (owner, offset) => {
    let response = await CardFunctions.find.for(owner, 100, offset)
    return response
}

CardHelpers.findDetail = async (_id) => {
    let response = await CardFunctions.find.detail(_id)
    return response
}

CardHelpers.delete = async (ids) => {
    let response = await CardFunctions.delete(ids)
    return response
}

module.exports = CardHelpers
