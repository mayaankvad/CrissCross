import { CARD_SET_FILTER, CARD_ADD, CARD_INITIAL_INSERT, CARD_DELETE } from '../actions/actionTypes'
import initialState from '../initialState'


export default function cardReducer(state = initialState.cards, action: { type: string, payload: any }) {
    let { payload } = action

    switch (action.type) {
        case CARD_SET_FILTER:
            return {
                ...state,
                filter: payload.filter
            }
        case CARD_INITIAL_INSERT:
            return {
                ...state,
                list: payload.cards
            }
        case CARD_ADD:
            return {
                ...state,
                list: [...payload.cards, ...state.list]
            }
        case CARD_DELETE:
            let newArr = JSON.parse(JSON.stringify(state.list));
            for (var i = 0; i < newArr.length; i += 1) {
                if (payload.id == newArr[i]._id) {
                    newArr.splice(i, 1)
                    break
                }
            }

            return {
                ...state,
                list: newArr
            }
        default:
            return state
    }
}
