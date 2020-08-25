import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import CardPanel from '../../helpers/cardPanel'
import { colors } from '../../../config'



export default function CardItem(props: { name: string, tagline: string, onDetailPress?: () => any }): JSX.Element {
    let { name, tagline, onDetailPress } = props

    let initials = name[0].toUpperCase() + (name.indexOf(" ") > -1 ? name[name.indexOf(" ") + 1] : name[1]).toUpperCase()
    let color = colors.colorList[(initials.charCodeAt(0) * initials.charCodeAt(1)) % colors.colorList.length]

    return (
        <CardPanel height={100}>

            <View style={[styles.initials, { backgroundColor: color }]}>
                <Text style={styles.initialsText}>{initials}</Text>
            </View>

            <View style={styles.body}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.tagline}>{tagline}</Text>
            </View>

            {onDetailPress &&
                <TouchableOpacity style={styles.detailButtonView} onPress={onDetailPress}>
                    <Ionicons name={'ios-arrow-forward'} size={25} color={colors.main} />
                </TouchableOpacity>
            }

        </CardPanel>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        height: 100,
        width: '95%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 15,

        backgroundColor: 'white',
        shadowRadius: 0,
        shadowOpacity: .1,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
    //
    initials: {
        width: 50,
        height: 50,
        padding: 10,
        margin: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    initialsText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    //
    body: {
        flex: 1,
        alignContent: 'flex-start',
        textAlign: 'left',
        padding: 10,
    },
    nameText: {
        fontSize: 20,
    },
    tagline: {
        color: colors.darkgrey,
        fontWeight: '300',
        paddingTop: 3,
    },
    //
    detailButtonView: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        padding: 20,
        marginBottom: 20,
        opacity: 80,
    },
})