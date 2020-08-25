import React, { Component } from 'react'
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';

import List from './list'
import Detail from './detail'


const Stack = createStackNavigator();



interface Props {

}

class Cards extends Component<Props> {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="list" component={List} options={{ title: 'Cards' }} />
                <Stack.Screen name="detail" component={Detail} options={{ title: 'Detail' }} />
            </Stack.Navigator>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({

})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)