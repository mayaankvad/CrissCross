import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";

import { colors, iconData } from '../../../config'
import Icon from '../../helpers/icon'
import CardPanel from '../../helpers/cardPanel'
import CardItem from './cardItem'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { deleteCard } from '../../../redux/actions/card'
import { getDetail, deleteCard as networkDeleteCard } from '../../../network/cardCalls'


interface Props {
    route: any
    navigation: any
    deleteCard: Function
}

class Detail extends Component<Props> {
    excludeFields = ['firstName', 'lastName', 'tagline']

    state = {
        card: null,
    }

    componentDidMount() {
        this.loadCard()
    }

    loadCard = async () => {
        let { _id } = this.props.route.params
        let response = await getDetail(_id)
        if (!response.success) {
            return
        }

        this.setState({ card: response.card })
    }

    shareBtn = () => {

    }

    deleteBtn = () => {
        networkDeleteCard(this.props.route.params._id)
        this.props.deleteCard(this.props.route.params._id)
        this.props.navigation.goBack()
    }

    render() {
        let { card } = this.state

        if (this.state.card == null) {
            return <ActivityIndicator color={colors.main} />
        }

        let { fields } = card

        let fieldList: { name: string; value: string }[] = []
        for (let prop in fields) {
            if (!this.excludeFields.includes(prop)) {
                fieldList.push({ name: prop, value: fields[prop] })
            }
        }
        console.log(fieldList)
        return (
            <View>
                <CardItem name={fields.firstName + ' ' + fields.lastName} tagline={fields.tagline} />

                <View style={styles.actionPanel}>
                    <CardPanel>
                        <TouchableOpacity style={styles.delete} onPress={this.deleteBtn}>
                            <Icon name='trash' color='#FC3D39' set='FontAwesome' />
                        </TouchableOpacity>
                    </CardPanel>
                </View>

                <ScrollView style={styles.list}>
                    {fieldList.map(item => (
                        <InfoStrip key={item.name} name={item.name} value={item.value} />
                    ))}
                </ScrollView>



            </View>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({
    route: ownProps.route,
    navigation: ownProps.navigation,
})

const mapDispatchToProps = { deleteCard }

export default connect(mapStateToProps, mapDispatchToProps)(Detail)





function InfoStrip(props: { name: string, value: string }) {
    if (props.value == null || props.value.length == 0) {
        return null
    }

    return (
        <CardPanel>
            <View style={styles.iconContainer}>
                <Icon {...iconData[props.name]} />
            </View>
            <Text style={styles.valueStyle}>{props.value}</Text>
        </CardPanel>
    )
}





const styles = StyleSheet.create({
    actionPanel: {
        marginTop: -30
    },
    valueStyle: {
        flex: 1,
        height: 30,
        width: '100%',
        alignItems: 'flex-start',
        padding: 5,
    },
    iconContainer: {
        flex: 0,
        paddingRight: 15,
    },
    list: {
        marginBottom: 175,
    },
    delete: {
    }
})
