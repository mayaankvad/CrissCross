import React from 'react'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import { colors } from '../../config'



interface Props {
    set: string, name: string, size?: number, color?: string
}

export default function Icon(props: Props): JSX.Element {
    let { set, name, size, color } = props

    size = size ? size : 30
    color = color ? color : colors.main

    
    switch (set) {
        case 'Ionicons':
            return <Ionicons name={name} size={size} color={color} />
        case 'FontAwesome':
            return <FontAwesome name={name} size={size} color={color} />
        case 'FontAwesome5':
            return <FontAwesome5 name={name} size={size} color={color} />
    }

    return <Ionicons name={''} size={size} color={color} />
}
