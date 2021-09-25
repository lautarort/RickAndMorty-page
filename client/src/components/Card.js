import React from "react"
import { NavLink } from "react-router-dom";

const Card = ({image, name,id,status}) => {
    return (
        <div>
            <img src={image} alt={name}/>
            <p>{status}</p>
            <NavLink to={`/character/${id}`}>{name}</NavLink>
        </div>
    )
}

export default Card;
