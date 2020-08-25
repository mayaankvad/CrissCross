import { USER_LOGIN, USER_UPDATE_FIELDS, USER_LOGOUT } from '../actions/actionTypes'
import initialState from '../initialState'


export default function userReducer(state = initialState.user, action: { type: string, payload: any }) {
    let payload = action.payload

    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                userId: payload.uid
            }
        case USER_UPDATE_FIELDS:
            return {
                ...state,
                fields: { ...state.fields, [payload.field]: payload.update }
            }
        case USER_LOGOUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}



