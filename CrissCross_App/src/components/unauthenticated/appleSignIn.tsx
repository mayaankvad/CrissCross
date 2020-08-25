import React, { Component } from 'react'
import { connect } from "react-redux";
import { StyleSheet } from 'react-native'
import * as AppleAuthentication from 'expo-apple-authentication';

import { userLoginFromProvider } from '../../network/userCalls'

interface Props {

}

class AppleSignIn extends Component<Props> {

    onPress = async () => {
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    // AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
            });
            // signed in
            userLoginFromProvider(credential, null)
        } catch (e) {
            if (e.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
            }
        }
    }


    render() {
        return (
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={5}
                style={{ width: 200, height: 44 }}
                onPress={this.onPress}
            />
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppleSignIn)




const styles = StyleSheet.create({

});