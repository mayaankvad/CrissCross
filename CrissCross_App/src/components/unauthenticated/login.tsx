import React, { Component } from 'react'
import { connect } from "react-redux";
import { StyleSheet, View } from 'react-native'

import { colors } from '../../config'
import GoogleSignIn from './googleSignIn'
import AppleSignIn from './appleSignIn'



interface Props {

}

class Login extends Component<Props> {

    onGooglePress = () => {

    }

    onApplePress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.signInOptionsContainer}>

                    <GoogleSignIn />
                    <AppleSignIn />

                </View>
            </View>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.main,
    },
    signInOptionsContainer: {
        marginBottom: 20
    },
});