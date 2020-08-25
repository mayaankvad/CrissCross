import intitalState from '../initialState'
import { UPDATE_LOADED } from '../actions/actionTypes'


export default function generalReducer(state = intitalState.general, action: { type: string, payload: any }) {
    switch (action.type) {
        case UPDATE_LOADED:
            return {
                ...state,
                loaded: action.payload.value
            }
        default:
            return state
    }
}

