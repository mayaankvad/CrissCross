import React, { Component } from 'react'
import { connect } from "react-redux";
import { StyleSheet, View, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import Welcome from './welcome'
import Login from './login'



interface Props {

}

class UnauthenticatedApp extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>

                <SafeAreaView style={styles.welcome}>
                    <Welcome />
                </SafeAreaView>

                <View style={styles.login}>
                    <Login />
                </View>

            </View>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedApp)



const styles = StyleSheet.create({
    container: {
        height: Math.round(Dimensions.get('window').height)
    },

    welcome: {
        flex: 4
    },

    login: {
        flex: 1
    }
});