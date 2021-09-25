import axios from 'axios'
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"
export const GET_ALL_EPISODES = "GET_ALL_EPISODES"
export const SET_NAME = "SET_NAME"
export const SET_ORDER = "SET_ORDER"
export const SET_PAGE = "SET_PAGE"
export const GET_CHARACTER = "GET_CHARACTER"
export const CREATE_CHARACTER = "CREATE_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const FILTER_STATUS = "FILTER_STATUS"


export const createCharacter = (character)=> {
    return (dispatch)=>{
        axios.post(`http://localhost:3001/characters/add`,character)
        .then(response =>{
            return dispatch({
                type: CREATE_CHARACTER
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getEpisodes = ()=> {
    return (dispatch)=>{
        axios.get(`http://localhost:3001/episodes`)
        .then(episodes =>{
            return dispatch({
                type: GET_ALL_EPISODES,
                payload: episodes.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const getCharacter = (id)=>{
    return async (dispatch)=>{
        try {
            const result = await axios.get(`http://localhost:3001/characters/${id}`)
            return dispatch({
                type: GET_CHARACTER,
                payload: result.data
            })

        } catch (error) {
            console.log(error)
        }
        // con then
        // axios.get(`http://localhost:3001/characters/${id}`)
        // .then((result)=>{
        //     return dispatch({
        //         type: GET_CHARACTER,
        //         payload: result.data
        //     })
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        // console.log("estoy primero")
    }
}
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
export const removeCharacter = ()=>{
    return{
        type: REMOVE_CHARACTER,
        payload: {}
    }
}

export const statusFilter =(status)=>{
    return{
        type: FILTER_STATUS,
        payload: status
    }
}




