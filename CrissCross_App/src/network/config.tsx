import { DEBUG } from '../config'

let domains = {
    'development': 'http://10.0.0.175:3000',
    'production': '',
}


export const DOMAIN = domains[DEBUG ? 'development' : 'production']


export const endpoints = {
    QRCODE_SCAN_DISPLAY: `https://<front-facing-domain>/scan?id=`,

    user: {
        LOGIN: `${DOMAIN}/auth/login/`,
        PROFILE: `${DOMAIN}/users/profile/`,
        UPDATE_PROPERTIES: `${DOMAIN}/users/update/properties/`,
        UPDATE_FIELDS: `${DOMAIN}/users/update/field/`,
    },

    card: {
        CREATE: `${DOMAIN}/cards/create/`,
        FIND_LIST: `${DOMAIN}/cards/find/`,
        FIND_DETAIL: `${DOMAIN}/cards/detail/`,
        DELETE: `${DOMAIN}/cards/delete/`
    },

}


export const sockets = {
    CONNECTION: 'connection',
    NEW_CARD: 'new_card'


}