import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from "react-redux"
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarCodeScanner } from 'expo-barcode-scanner'

import { colors } from '../../../config'
import ProfileModal from './profileModal'
import { createCard } from '../../../network/cardCalls'
import { addCards } from '../../../redux/actions/card'
import { endpoints } from '../../../network/config'
import { eventEmitter } from '../../helpers/eventEmitter'


interface Props {
    addCards: Function
}

class Scan extends Component<Props> {
    state = {
        modalVisible: false,
        initials: '',
        name: '',
    }

    onScan = async ({ type, data }) => {
        if (type != "org.iso.QRCode") {
            return
        }

        if (!data.startsWith(endpoints.QRCODE_SCAN_DISPLAY)) {
            eventEmitter.emit('notification', { message: 'Not a CrissCross QR Code', error: true })
            return
        }


        let scanedId = data.replace(endpoints.QRCODE_SCAN_DISPLAY, '')

        let response: any = await createCard(scanedId)

        this.props.addCards([response.card])

        let name = response.card.fields.firstName + ' ' + response.card.fields.lastName
        let initials = response.card.fields.firstName.charAt(0) + response.card.fields.lastName.charAt(0)

        this.setState({
            modalVisible: true,
            initials: initials,
            name: name,
        })
    }

    modalClose = () => {
        this.setState({ modalVisible: false })
    }


    render() {
        return (
            <BarCodeScanner onBarCodeScanned={this.state.modalVisible ? undefined : this.onScan} style={StyleSheet.absoluteFillObject}>
                <SafeAreaView>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Criss Cross</Text>
                    </View>

                    <ProfileModal
                        title={"Scanned!"}
                        initials={this.state.initials}
                        name={this.state.name}
                        visible={this.state.modalVisible}
                        onClose={this.modalClose}
                    />

                </SafeAreaView>

            </BarCodeScanner>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({
})

const mapDispatchToProps = { addCards }

export default connect(mapStateToProps, mapDispatchToProps)(Scan)



const styles = StyleSheet.create({
    textView: {
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
        backgroundColor: colors.main
    },
    text: {
        color: 'white',
        fontSize: 20,
    },
})
