
import { UPDATE_LOADED } from '../actions/actionTypes'


export let setLoaded = (value: boolean) => ({
    type: UPDATE_LOADED,
    payload: { value }
})
