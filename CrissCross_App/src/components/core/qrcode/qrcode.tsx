import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCode from 'react-native-qrcode-svg';

import CardPanel from '../../helpers/cardPanel'
import { logo } from '../../../assets/images/index'
import { colors } from '../../../config';
import { endpoints } from '../../../network/config'


interface Props {
    userId: string
    name: string
}

class Code extends Component<Props> {

    render() {
        let qrcode_url = `${endpoints.QRCODE_SCAN_DISPLAY}${this.props.userId}`

        return (
            <SafeAreaView>

                <View style={styles.nameContainer}>
                    <CardPanel>
                        <View style={styles.nameView}>
                            <Text style={styles.nameText}>{this.props.name}</Text>
                        </View>
                    </CardPanel>
                </View>

                <View style={styles.qrcodeView}>
                    <CardPanel height={325}>
                        <QRCode
                            color={colors.main}
                            size={300}
                            logo={logo}
                            logoSize={50}
                            logoBackgroundColor='transparent'
                            value={qrcode_url} />
                    </CardPanel>
                </View>


                <View style={styles.instructionView}>
                    <CardPanel>
                        <Text>Instructions go here ...</Text>
                    </CardPanel>
                </View>


            </SafeAreaView>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({
    userId: state.user.userId,
    name: state.user.fields.firstName + ' ' + state.user.fields.lastName
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Code)




const styles = StyleSheet.create({
    qrcodeView: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        alignSelf: 'center',
    },
    nameContainer: {
        marginTop: 15
    },
    nameView: {
        flex: 1,
        alignItems: 'center'
    },
    nameText: {
        fontSize: 20,
        fontWeight: '400'
    },
    instructionView: {
        marginTop: '95%'
    }
})
