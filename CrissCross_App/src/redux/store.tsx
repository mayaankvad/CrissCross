import { createStore } from "redux"
import rootReducer from './reducers'

import { startSocketIo } from '../network/socket'



let store = createStore(rootReducer)

// startSocketIo(store)



// store.subscribe(() => console.log(store.getState()))

export default store 