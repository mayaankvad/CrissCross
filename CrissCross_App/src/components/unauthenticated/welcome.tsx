import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import { colors } from '../../config'
import { logo, splash } from '../../assets/images'



export default class Welcome extends Component {

    render() {
        return (
            <Swiper autoplay={true} activeDotColor={colors.main} >

                <View style={styles.slide}>
                    <Image source={logo} style={styles.image} />
                </View>

                <View style={styles.slide}>
                    <Image source={splash} style={styles.image} />
                </View>

            </Swiper>
        )
    }

}



const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100
    }
});