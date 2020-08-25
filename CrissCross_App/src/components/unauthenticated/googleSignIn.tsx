import React, { Component } from 'react'
import { connect } from "react-redux";
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Google from 'expo-google-app-auth';

import { googleSignInConfig } from '../../config'
import { googleSignIn } from '../../assets/images'
import { userLoginFromProvider } from '../../network/userCalls'


interface Props {

}

class GoogleSignIn extends Component<Props> {

    onPress = async () => {
        const googleLoginResult = await Google.logInAsync(googleSignInConfig);
        userLoginFromProvider(null, googleLoginResult)
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={this.onPress}>
                <Image source={googleSignIn} style={styles.google} />
            </TouchableOpacity>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignIn)




const styles = StyleSheet.create({
    google: {
        width: 201,
        marginLeft: 0,
        resizeMode: 'contain',
        margin: -15
    }
})
