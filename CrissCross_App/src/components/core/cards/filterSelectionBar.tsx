import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

import { colors } from '../../../config'



interface Props {
    options: { display: string, value: string }[]
    current: string
    onChange: Function
}

export default function FilterBar(props: Props): JSX.Element {
    let { options, current, onChange } = props
    return (
        <View style={styles.container}>
            {options.map(item => {
                let selected: boolean = item.value === current
                return (
                    <TouchableOpacity key={item.value} style={[styles.option, selected ? styles.selected : styles.unselected]} onPress={() => onChange(item.value)}>
                        <Text style={selected ? styles.selectedText : styles.unselectedText} >{item.display}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    option: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        borderRadius: 10,
    },
    selected: {
        backgroundColor: colors.main,
    },
    unselected: {
        backgroundColor: colors.lightgrey
    },
    selectedText: {
        color: 'white',
        fontWeight: 'bold',
    },
    unselectedText: {

    }
})