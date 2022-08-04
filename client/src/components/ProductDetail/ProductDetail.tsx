import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductById, cleanDetailsProducts } from '../../redux/action'
import "../ProductDetail/ProductDetail.css"

export default function ProductDetail() {
    const allProducts = useSelector((state: any) => state.rootReducer.allProducts );
    console.log(allProducts);
    const dispatch: any = useDispatch();
    const params = useParams()
    

    useEffect(() => {
        dispatch(getProductById(params.id))
        dispatch(cleanDetailsProducts())
    },[params.id])

   

  
    const idDefault = allProducts.filter((item: any) => item.id === Number(params.id))[0]
    console.log(idDefault,"hola");
    return (
        <div>
            {
                <>
                 <div>
                        <div>
                        {idDefault.name}
                        </div>
                        <div>
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
                    <div>
                    {idDefault.price}
                    </div>
                    <div>
                    {idDefault.brand}
                    </div>
                    
                    </div>
                    </>
                
            }
        </div>
    )
}