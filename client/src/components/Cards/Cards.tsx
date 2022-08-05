import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { deleteProducts } from '../../redux/action';
import "../Cards/card.css"
import { Button } from 'reactstrap';


export default function Card({ name, description, image, price, brand, id}: any) {

    const isAdmin = useSelector((state: any) => state.rootReducer.isAdmin);
    const params = useParams();
    const dispatch: any = useDispatch();

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
        <Button color="info">{isAdmin ? <Link to={`/edit/${id}`}>Edit</Link> : <></>}  </Button>
        
        <Button style={{marginTop: "30px"}} color="danger" onClick={() => dispatch(deleteProducts(id)) }>Delete</Button>
        </div>
    )
}