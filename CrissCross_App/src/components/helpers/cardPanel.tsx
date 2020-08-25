import React from 'react'
import { StyleSheet, View } from 'react-native'


export default function CardPanel(props: { height?: number, children: any }): JSX.Element {
    let { height, children } = props

    return (
        <View style={[styles.container, height ? { height: height } : {}]}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",
        width: '95%',

        justifyContent: 'space-between',
        alignSelf: 'center',

        paddingVertical: 10,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginTop: 5,

        // shadow
        backgroundColor: 'white',
        shadowRadius: 0,
        shadowOpacity: .075,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
})






