import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecives } from '../../redux/action'
import Paginado from '../Paginado/Paginado';
import ProductsCards from '../ProductCard/ProductCard';
import '../Home/Home.css'

export default function Home() {
    const dispatch: any = useDispatch();
    const allProducts = useSelector((state: any) => state.rootReducer.allProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = allProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const paginate = (pageNumber: any) => {
        setCurrentPage(pageNumber);
      };

      useEffect(() => {
        setCurrentPage(1);
      }, [allProducts]);
    
      

    useEffect(() => {
        dispatch(getAllRecives())
    },[])
console.log(allProducts);
    return (
        <>
        <div className="home">
            <h1>IT Challenge Crowd</h1>
            <div>

            {
                allProducts && <ProductsCards allProducts={currentProduct} /> 
            }
            </div>
            
        </div>
          
            <div>

            <Paginado
                productsPerPage={productsPerPage}
                totalProduct={allProducts.length}
                paginate={paginate}
            />
            </div>
            </>
    )
}