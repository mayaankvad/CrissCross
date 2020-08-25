import { networkCall } from './call'
import { endpoints } from './config'
import store from '../redux/store'

const cardEndpoints = endpoints.card



export async function createCard(scanned: string) {
    let userId = store.getState().user.userId

    let response = await networkCall(cardEndpoints.CREATE, { scanner: userId, scanee: scanned })
    return response
}

export async function getCards(offset: number): Promise<{ success: boolean; cards: any[] }> {
    let userId = store.getState().user.userId

    let response: any = await networkCall(cardEndpoints.FIND_LIST, { _id: userId, offset: offset })
    return response
}

export async function getDetail(cardId: string): Promise<{ success: boolean; card: any }> {
    let response: any = await networkCall(cardEndpoints.FIND_DETAIL, { _id: cardId })
    return response
}

export async function deleteCard(cardId: string): Promise<{ success: boolean }> {
    let response: any = await networkCall(cardEndpoints.DELETE, { ids: [cardId] })
    return response
}

