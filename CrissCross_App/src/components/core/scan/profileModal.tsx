import React from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native'
import { colors } from '../../../config'


interface Props { 
    visible: boolean
    title: string
    initials: string
    name: string
    onClose: () => void
}

export default function ProfileModal(props: Props): JSX.Element {
    return (
        <Modal animationType="slide" transparent={true} visible={props.visible} onRequestClose={props.onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modelTitle}>{props.title}</Text>

                    <View style={styles.modelIcon}>
                        <Text style={styles.modelIconText}>{props.initials}</Text>
                    </View>

                    <View style={styles.nameView}>
                        <Text style={styles.nameText}>{props.name}</Text>
                    </View>

                    <TouchableOpacity onPress={props.onClose}>
                        <Text style={styles.modelDismiss}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 30,
        alignItems: "center",
        width: '55%',
    },
    modelTitle: {
        fontSize: 20,
        marginBottom: 10,
    },
    modelIcon: {
        width: 50,
        height: 50,
        padding: 10,
        margin: 10,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.main,
    },
    modelIconText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    nameView: {
        margin: 5,
    },
    nameText: {
        fontSize: 15,
    },
    modelDismiss: {
        color: colors.main,
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5,
        padding: 3,
    },
})
