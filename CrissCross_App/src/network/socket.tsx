import io from 'socket.io-client'

import { DOMAIN } from './config'
import { sockets } from './config'
import { eventEmitter } from '../components/helpers/eventEmitter'
import { addCards } from '../redux/actions/card'


export const startSocketIO = (store: any, _id: string) => {

    const socket = io(DOMAIN, { transports: ["websocket"], query: `userId=${_id}` })

    socket.on(sockets.NEW_CARD, (data) => {
        store.dispatch(addCards([data.card]))

        var msg = `${data.card.fields.firstName} scanned you`
        eventEmitter.emit('notification', { message: msg })
    });

}
