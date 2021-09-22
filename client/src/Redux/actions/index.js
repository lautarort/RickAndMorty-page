import axios from 'axios'
export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS"

export const getCharacters = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/characters")
        .then(characters => {
            return dispatch({
                type: GET_ALL_CHARACTERS,
                payload: characters.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
} 