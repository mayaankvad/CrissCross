import React, { Component } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { connect } from "react-redux";

import FilterBar from './filterSelectionBar'
import CardItem from './cardItem'
import NoCards from './noCards'

import { colors } from '../../../config'
import { setCardFilter, insertCards } from '../../../redux/actions/card'
import { getCards as networkGetCards } from '../../../network/cardCalls'



interface Props {
    navigation: any

    cardList: any[]

    currentFilter: string
    setFilter: (filter: string) => any
    insertCards: Function
}

class List extends Component<Props> {
    static options = [{ display: "All", value: "ALL" }, { display: "Added Me", value: "ADDED_ME" }, { display: "Added Them", value: "ADDED_THEM" }]

    state = {
        loading: this.props.cardList.length == 0
    }

    componentDidMount() {
        if (this.props.cardList.length == 0) {
            this.getInitialsCards()
                .then(() => this.setState({ loading: false }))
        }
    }

    getInitialsCards = async () => {
        let response = await networkGetCards(0)
        if (!response.success) {
            return
        }
        this.props.insertCards(response.cards)
    }

    onDetailPress = (key) => {
        this.props.navigation.navigate('detail', { _id: key })
    }

    renderListItem = (item) => {
        return <CardItem name={item.fields.firstName + ' ' + item.fields.lastName} tagline={item.fields.tagline} onDetailPress={() => this.onDetailPress(item._id)} />
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator color={colors.main} />
        }

        if (this.props.cardList.length <= 0) {
            return <NoCards />
        }


        let filteredList
        if (this.props.currentFilter == 'ALL') {
            filteredList = this.props.cardList
        }
        else {
            filteredList = this.props.cardList.filter(c => c.filterKey == this.props.currentFilter)
        }

        return (
            <View>
                <FilterBar options={List.options} current={this.props.currentFilter} onChange={filter => this.props.setFilter(filter)} />

                <View style={styles.listContainer}>
                    <FlatList
                        data={filteredList}
                        renderItem={({ item }) => this.renderListItem(item)}
                        keyExtractor={(item) => item._id}
                    />
                </View>

            </View>
        )
    }

}


const mapStateToProps = (state, ownProps?) => ({
    navigation: ownProps.navigation,
    currentFilter: state.cards.filter,
    cardList: state.cards.list
})

const mapDispatchToProps = {
    setFilter: setCardFilter,
    insertCards
}

export default connect(mapStateToProps, mapDispatchToProps)(List)


const styles = StyleSheet.create({
    listContainer: {
        marginBottom: 125
    }
})