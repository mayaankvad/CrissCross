import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text, Button } from 'react-native'

import { colors, asyncKeys } from '../../../config'

import store from '../../../redux/store'
import { userLogout } from '../../../redux/actions/user'



interface Props {

}

export default function Info(props: Props): JSX.Element {
    return (
        <View>
            <Text>Info / Help / Legal</Text>
            
            <LogoutButton />
        </View>
    )
}


function LogoutButton(): JSX.Element {
    let onPress = () => {
        AsyncStorage.multiRemove([asyncKeys.USERID])
        store.dispatch(userLogout())
    }

    return (
        <Button title={"Logout"} onPress={onPress} />
    )
}



const styles = StyleSheet.create({

})