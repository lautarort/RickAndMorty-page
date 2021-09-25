import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCharacter, removeCharacter } from '../Redux/actions/index.js'


function Character(props) {
    
    const { id } = props.match.params
    const { character } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getCharacter(id))
        return()=>{
            dispatch(removeCharacter())
        }
    },[dispatch,id])

const goToBack = ()=>{
    history.goBack()
}

    return (
        <div>
            <button onClick={goToBack}>⏪</button>
            {

                character?.name ? 
                <>
                    <img src={character.image}/>
                    <p>{character.name}</p>
                </>
                :
                <div>Cargando...</div>
            }
        </div>
    )
}

export default Character
