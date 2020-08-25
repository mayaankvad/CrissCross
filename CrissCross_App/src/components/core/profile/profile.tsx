import React, { Component } from 'react'
import { Button, TouchableOpacity, StyleSheet, Keyboard } from 'react-native'
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';

import Inputs from './inputs'
import { colors } from '../../../config';
import Icon from '../../helpers/icon';
import Info from './info'
import { updateFields } from '../../../network/userCalls'



const Stack = createStackNavigator();



interface Props {

}

class Profile extends Component<Props> {

    onSavePress = () => {
        Keyboard.dismiss()
        updateFields()
    }

    saveBtn = () => <Button title={"Save"} color={colors.main} onPress={this.onSavePress} />

    infoButton = (navigation) => (
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('info')}><Icon name={"ios-information-circle-outline"} set={"Ionicons"} size={25} /></TouchableOpacity>
    )

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="inputs" component={Inputs} options={({ navigation }) => ({ title: 'Profile', headerRight: this.saveBtn, headerLeft: () => this.infoButton(navigation) })} />
                <Stack.Screen name="info" component={Info} options={{ title: 'Info' }} />
            </Stack.Navigator>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)


const styles = StyleSheet.create({
    header: {

    }
})