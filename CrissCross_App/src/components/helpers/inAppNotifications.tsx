import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PanGestureHandler } from 'react-native-gesture-handler'

import { eventEmitter } from './eventEmitter'
import { colors } from '../../config'



interface Props {

}
export class InAppNotificationContainer extends Component<Props> {
    state = {
        show: false,
        text: '',
        error: false,
    }

    constructor(props: Props) {
        super(props)
        eventEmitter.addListener('notification', this.handleNotificationEmitted)
    }

    componentWillUnmount() {
        eventEmitter.removeListener('notification', this.handleNotificationEmitted)
    }

    handleNotificationEmitted = (event) => {
        this.setState({ show: true, text: event.message, error: event.error ?? false })
        setTimeout(() => {
            this.dismiss()
        }, event.duration ?? 1500)
    }

    dismiss = () => {
        this.setState({ show: false, error: false, text: null })
    }

    render() {
        if (this.state.show) {
            return (
                <SafeAreaView style={styles.elevatedElement}>
                    <Notification text={this.state.text} error={this.state.error} dismiss={this.dismiss} />
                </SafeAreaView>
            )
        }

        return null
    }
}


function Notification(props: { text: string, error: boolean, dismiss: Function }): JSX.Element {
    return (
        <PanGestureHandler onGestureEvent={(e) => props.dismiss()}>
            <View style={styles.notification}>
                <Text style={{ color: props.error ? colors.notification.errorText : colors.notification.text }}>
                    {props.text}
                </Text>
            </View >
        </PanGestureHandler>
    )
}



const styles = StyleSheet.create({
    elevatedElement: {
        flex: 0,
        zIndex: 3, // works on ios
        elevation: 100, // works on android
        position: 'absolute',
        width: '100%'
    },

    notification: {
        backgroundColor: 'white',
        width: '100%',
        minHeight: 30,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 15,

        borderRadius: 10,
        // borderWidth: 0.5,
        // borderColor: colors.main,

        // // shadow
        shadowRadius: 0,
        shadowOpacity: .075,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2,
        },
    }
})







