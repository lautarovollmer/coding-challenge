import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecives } from '../../redux/action'
import ProductsCards from '../ProductCard/ProductCard';


export default function Home() {
    const dispatch: any = useDispatch();
    const allProducts = useSelector((state: any) => state.rootReducer.allProducts);
    

    useEffect(() => {
        dispatch(getAllRecives())
    },[])
console.log(allProducts);
    return (
        <div>
            <h1>IT Challenge Crowd</h1>
            {
                allProducts && <ProductsCards allProducts={allProducts} /> 
            }

            
        </div>
          
    )
}