
import { CARD_SET_FILTER, CARD_ADD, CARD_INITIAL_INSERT, CARD_DELETE } from './actionTypes'


export let setCardFilter = (filter: string) => ({
    type: CARD_SET_FILTER,
    payload: { filter }
})

export let addCards = (cards: any[]) => ({
    type: CARD_ADD,
    payload: { cards }
})

export let insertCards = (cards: any[]) => ({
    type: CARD_INITIAL_INSERT,
    payload: { cards }
})

export let deleteCard = (cardId: string) => ({
    type: CARD_DELETE,
    payload: {
        id: cardId,
    }
})