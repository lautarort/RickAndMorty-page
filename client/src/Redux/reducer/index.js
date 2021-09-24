import {
    GET_ALL_CHARACTERS,
    SET_NAME,
    SET_ORDER,
    SET_PAGE
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
            default:
                return state
        }
    
    }