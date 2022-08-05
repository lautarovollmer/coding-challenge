import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "../Cards/card.css"

export default function Card({ name, description, image, price, brand, id}: any) {

    const isAdmin = useSelector((state: any) => state.rootReducer.isAdmin);


    return (
        <div className="card">
            <div>
                <img 
                className="imagen"
                    src={
                        image ? image : 'https://c.tenor.com/On7kvXhzml4AAAAC/loading-gif.gif'
                    }
                    alt="not found"
                />
            </div>
        <Link to={`/editproducts/${id}`}>
            <h2 className="name">{name}</h2>
        </Link>
        <p>{description}</p>
        <h4>{price}</h4>
        <h4>{brand}</h4>
        {isAdmin ? <Link to={`/edit/${id}`}>Edit</Link> : <></>}  
        </div>
    )
}