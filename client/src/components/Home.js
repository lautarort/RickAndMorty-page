import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getCharacters ,setPage} from "../Redux/actions/index.js";
import Card from "./Card.js"



const Home = () => {
    const dispatch = useDispatch()
    const { characters, name, order, page } = useSelector(state=> state)
    
   
    
    useEffect(()=>{
       dispatch(getCharacters({})) 
    },[dispatch])

    const changePage = (page)=>{
        dispatch(getCharacters({page,name,order}))
        dispatch(setPage(page))
    }
    
    return (
        <div>
            {
                characters?.result?.length>0 && characters.result.map((e)=>{
                   return <Card status={e.status} image={e.image} name={e.name} id={e.id} key={e.id}/>
                })
            }
                <button disabled={page -1 === 0} onClick={()=> {changePage(page -1)}}>previous</button>
                    <label>{page}</label>
                <button disabled={characters?.count <= (page * 5)} onClick={()=>{changePage(page +1)}}>next</button>
            
        </div>
    )
}

export default Home
