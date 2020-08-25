import React, { Component } from 'react'
import { connect } from "react-redux";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../../config';
import Icon from '../helpers/icon'
import Cards from './cards/cards'
import Profile from './profile/profile'
import QRcode from './qrcode/qrcode'
import Scan from './scan/scan'




const Tab = createBottomTabNavigator();


const getScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName: string = ''
        let iconSet: string = ''

        switch (route.name) {
            case 'Profile':
                iconName = focused ? 'md-contact' : 'ios-contact'
                iconSet = 'Ionicons'
                break
            case 'Code':
                iconName = focused ? 'qrcode' : 'qrcode'
                iconSet = 'FontAwesome'
                break
            case 'Scan':
                iconName = focused ? 'md-qr-scanner' : 'ios-qr-scanner'
                iconSet = 'Ionicons'
                break
            case 'Cards':
                iconName = focused ? 'ios-list-box' : 'ios-list'
                iconSet = 'Ionicons'
                break
        }

        return <Icon name={iconName} set={iconSet} size={size} color={color} />
    },
})



interface Props {

}

class CrissCross extends Component<Props> {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator screenOptions={route => getScreenOptions(route)} tabBarOptions={{ activeTintColor: colors.main }} >
                    <Tab.Screen name="Profile" component={Profile} />
                    <Tab.Screen name="Code" component={QRcode} />
                    <Tab.Screen name="Scan" component={Scan} />
                    <Tab.Screen name="Cards" component={Cards} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CrissCross)