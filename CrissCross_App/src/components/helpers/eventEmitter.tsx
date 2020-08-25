import { EventEmitter } from 'events'

const emitter = new EventEmitter()
emitter.removeAllListeners()

export const eventEmitter = emitter
