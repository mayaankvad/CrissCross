import { combineReducers } from 'redux'

import userReducer from './user'
import generalReducer from './general'
import cardReducer from './card'


let rootReducer = combineReducers({
    user: userReducer,
    general: generalReducer,
    cards: cardReducer,
})


export default rootReducer