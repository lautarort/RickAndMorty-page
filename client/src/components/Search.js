import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getCharacters, setName, setPage,statusFilter } from '../Redux/actions'


const SearchInput = styled.input`

`
function Search() {
    const [input, setInput] = React.useState("")

    const dispatch = useDispatch()

    const handleOnChange = (e)=>{
        e.preventDefault()
        setInput(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        dispatch(setName(input))//guardamos en store el name
        dispatch(getCharacters({page:1, name:input})) // buscamos efectivamente
        dispatch(setPage(1))
        setInput("")
    }
    const filterVivo = ()=>{
        dispatch(statusFilter("unknown"))
    }
    return (
        <form onSubmit={onSubmit}>
            <SearchInput type="text" placeholder="Search..." onChange={handleOnChange} value={input} />
            <button type="button" onClick={filterVivo} >unknown</button>
            <button type="submit" >🔍</button>
        </form>
    )
}

export default Search
