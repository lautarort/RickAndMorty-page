import axios from 'axios'
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const SET_NAME = "SET_NAME"
export const SET_ORDER = "SET_ORDER"
export const SET_PAGE = "SET_PAGE"

export const getCharacters = ({page, order, name})=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/characters?page=${page?page:1}&order=${order?order:""}&name=${name?name:""}`)
        .then(characters =>{
            return dispatch({
                type: GET_ALL_CHARACTERS,
                payload: characters.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const setName = (name)=>{
    return{
        type: SET_NAME,
        payload: name
    }
}
export const setPage = (page)=>{
    return{
        type: SET_PAGE,
        payload: page
    }
}
export const setOrder = (order)=>{
    return{
        type: SET_ORDER,
        payload: order
    }
}






