import {GET_ALL_CHARACTERS} from '../actions/index.js'

const initialState = {
    characters:[],
    character:{},
    episodes:[]
}

export default function reducer (State =initialState, {type, payload}) {
    switch (type) {
        case GET_ALL_CHARACTERS:
            return {
               ...state,
                characters: payload
            }
            default:
                return state
    }
}