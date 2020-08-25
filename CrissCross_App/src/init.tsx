import { AppState } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import store from './redux/store'
import { insertCards } from './redux/actions/card'
import { getCards } from './network/cardCalls'
import { loginUserFromId } from './network/userCalls'
import { asyncKeys } from './config'


export default async function initApplication() {
    console.log("CrissCross Init")
    await loginInit()

    AppState.addEventListener("change", onAppStateChange)

    return;
}


async function loginInit() {
    let userId = await AsyncStorage.getItem(asyncKeys.USERID)

    if (userId != null) {
        await loginUserFromId(userId)
    }
}


async function onAppStateChange() {
    if (AppState.currentState === 'active') {
        setTimeout(async () => {
            let response = await getCards(0)
            if (!response.success) {
                return
            }
            store.dispatch(insertCards(response.cards))
        }, 500)
    }
}
