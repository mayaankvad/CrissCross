import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


export default function NoCards() {
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>No Cards Yet :( </Text>
            <Text>Scan CrissCross codes to see cards here</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: '35%',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 30,
        marginBottom: 20,
    }
})