import AsyncStorage from '@react-native-community/async-storage'
import { networkCall } from './call'
import { endpoints } from './config'
import { eventEmitter } from '../components/helpers/eventEmitter'
import store from '../redux/store'
import { userLogin, updateUserFields } from '../redux/actions/user'
import { asyncKeys } from '../config'
import { startSocketIO } from './socket'


const userEndpoints = endpoints.user


export async function userLoginFromProvider(apple?: any | null, google?: any | null): Promise<object> {
    let params: any = {}

    if (google != null) {
        params = { type: 'google', idToken: google.idToken }
    }

    else if (apple != null) {
        params = { type: 'apple', idToken: apple.identityToken, uid: apple.user, name: { first: apple.fullName.givenName, last: apple.fullName.familyName } }
    }


    let response: any = await networkCall(userEndpoints.LOGIN, params)

    if (response.success == false) {
        eventEmitter.emit('notification', { message: "Could not login, try again later", error: true })
        return {}
    }

    if (response.type == 'existing') {
        AsyncStorage.setItem(asyncKeys.USERID, response.userObj._id)
        loginUserFromFields(response.userObj)
    }

    else if (response.type == 'new') {
        AsyncStorage.setItem(asyncKeys.USERID, response._id)
        loginUserFromId(response._id)
    }

    return {}
}

export async function loginUserFromId(_id: string) {
    let userObj = await fetchUserObject(_id)
    loginUserFromFields(userObj)
}

export function loginUserFromFields(userObj: any) {
    startSocketIO(store, userObj._id)

    for (let prop in userObj.fields) {
        if (prop == '_id') continue;

        store.dispatch(updateUserFields(prop, userObj.fields[prop]))
    }

    store.dispatch(userLogin(userObj._id))
}


export async function fetchUserObject(userId?: string | null): Promise<object> {
    if (userId == null) {
        userId = store.getState().user.userId
    }

    let response = await networkCall(userEndpoints.PROFILE, { _id: userId })
    return response
}


export async function updateProperties(properties: object): Promise<object> {
    let userId = store.getState().user.userId

    let response = await networkCall(userEndpoints.UPDATE_PROPERTIES, { _id: userId, properties: properties })
    return response
}


export async function updateFields(): Promise<object | null> {
    let user = store.getState().user

    if (user.fields.firstName == null || user.fields.firstName == '' || user.fields.lastName == null || user.fields.lastName == '') {
        eventEmitter.emit('notification', { message: 'First and Last Name cannot be empty', error: true })
        return null
    }
 
    try {
        let response = await networkCall(userEndpoints.UPDATE_FIELDS, { _id: user.userId, fields: user.fields })
        eventEmitter.emit('notification', { message: 'Saved' })
        return response
    } catch (err) {
        eventEmitter.emit('notification', { message: 'Failed to update Info', error: true })
    }

    return null
}
