import {
    GET_ALL_CHARACTERS,
    SET_NAME,
    SET_ORDER,
    SET_PAGE,
    GET_CHARACTER,
    REMOVE_CHARACTER,
    GET_ALL_EPISODES,
    FILTER_STATUS
    }from '../actions/index.js'
    
    const initialState ={
        characters:[],
        character:{},
        episodes:[],
        name:"",
        order:"",
        page:1
    }
    
    export default function reducer (state = initialState, {type, payload}){
    
        switch (type) {
           
            case GET_ALL_CHARACTERS:
                return {
                   ...state,
                    characters: payload
                }
            case SET_NAME:
                return{
                    ...state,
                    name: payload
                }
            case SET_PAGE:
                return{
                    ...state,
                    page: payload
                }
            case SET_ORDER:
                return{
                    ...state,
                    order: payload
                }
            case GET_CHARACTER:
                return{
                    ...state,
                    character: payload
                }
            case REMOVE_CHARACTER:
                return{
                    ...state,
                    character:payload
                }
            case GET_ALL_EPISODES:
                return{
                    ...state,
                    episodes: payload
                }
            case FILTER_STATUS:
                const newCharacters = state.characters.result.filter(c =>{
                    return c.status === payload
                })
                return{
                    ...state,
                    characters:{
                        ...state.characters,
                        result:newCharacters
                    } 
                }
            default:
                return state
        }
    
    }