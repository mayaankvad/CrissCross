import { USER_LOGIN, USER_UPDATE_FIELDS, USER_LOGOUT } from '../actions/actionTypes'


export const updateUserFields = (field: string, update: string) => {
    return {
        type: USER_UPDATE_FIELDS,
        payload: { field, update }
    }
}


export const userLogin = (uid: string) => {
    return {
        type: USER_LOGIN,
        payload: { uid: uid }
    }
}


export const userLogout = () => {
    return {
        type: USER_LOGOUT,
        payload: true
    }
}
