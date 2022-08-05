import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductById, cleanDetailsProducts } from '../../redux/action'
import "../ProductDetail/ProductDetail.css"

export default function ProductDetail() {
    const allProducts = useSelector((state: any) => state.rootReducer.allProducts );
    const dispatch: any = useDispatch();
    const params = useParams()
    

    useEffect(() => {
        dispatch(getProductById(params.id))
        dispatch(cleanDetailsProducts())
    },[params.id])

   

  
    const idDefault = allProducts.filter((item: any) => item.id === Number(params.id))[0]
   
    return (
        <div>
            {
                <>
                 <div className="style">
                        <div className="stats">
                        {idDefault.name}
                        </div>
                        <div className="stats">
                        {idDefault.description}
                        </div>
                    
                    <img
                className="style-img"
                src={
                  idDefault.image
                    ? idDefault.image
                    : "https://c.tenor.com/On7kvXhzml4AAAAC/loading-gif.gif"
                }
                alt="img pokemon"
              />    
                    <div className="stats">
                    {idDefault.price}
                    </div>
                    <div className="stats">
                    {idDefault.brand}
                    </div>
                    
                    </div>
                    </>
                
            }
        </div>
    )
}