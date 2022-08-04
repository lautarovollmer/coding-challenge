import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ name, description, image, price, brand, id}: any) {
    return (
        <div>
            <div>
                <img 
                    src={
                        image ? image : 'https://c.tenor.com/On7kvXhzml4AAAAC/loading-gif.gif'
                    }
                    alt="not found"
                />
            </div>
        <Link to={`/products/${id}`}>
            <h2>{name}</h2>
        </Link>
        <p>{description}</p>
        <h4>{price}</h4>
        <h4>{brand}</h4>
        </div>
    )
}