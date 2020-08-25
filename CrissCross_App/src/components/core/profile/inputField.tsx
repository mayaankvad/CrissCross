import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import CardPanel from '../../helpers/cardPanel'
import Icon from '../../helpers/icon'



interface Props {
    placeholder: string
    type?: string
    keyboard?: string
    name: string
    value: string
    onChange: any

    icon: {
        set: string
        name: string
        size?: number
        color?: string
    },
}

export default function InputField(props: Props): JSX.Element {
    let { type, keyboard, placeholder, icon, name, value, onChange } = props

    return (
        <CardPanel>

            <View style={styles.iconContainer}>
                <Icon {...icon} />
            </View>

            <TextInput
                textContentType={type ?? 'none'}
                keyboardType={keyboard ?? 'default'}
                placeholder={placeholder}
                style={styles.inputStyle}
                value={value}
                onChangeText={value => onChange(name, value)}
            />

        </CardPanel>
    );
}


const styles = StyleSheet.create({
    inputStyle: {
        flex: 1,
        height: 30,
        width: '100%',
        alignItems: 'flex-start',
        padding: 5,
    },
    iconContainer: {
        flex: 0,
        paddingRight: 15,
    }
})