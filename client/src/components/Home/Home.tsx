import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRecives } from '../../redux/action'
import Paginado from '../Paginado/Paginado';
import ProductsCards from '../ProductCard/ProductCard';
import '../Home/Home.css'
import { Link } from 'react-router-dom';


export default function Home() {
    const dispatch: any = useDispatch();
    const allProducts = useSelector((state: any) => state.rootReducer.allProducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProduct = allProducts && allProducts.slice(
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

    return (
        <>
        <div className="home">
            <h1>IT Challenge Crowd</h1>
            <Link to='/login'>
            <button className="restart" >Login</button>
            </Link>
           <div>
            
              {allProducts === "Product not found" && <div>Product not found</div>}
              {allProducts && allProducts.length > 0 && Array.isArray(allProducts) && (
              <ProductsCards allProducts={currentProduct} /> 
              )}

              {allProducts && allProducts.length === 0 &&  (
                <div>
                    <img 
                        src="https://c.tenor.com/On7kvXhzml4AAAAC/loading-gif.gif"
                        alt="loadin-pokemons"
                        height="70"
                        width="70px"
                    />
                </div>
              )}
            </div>
            </div>
          <div>
            <Paginado
                productsPerPage={productsPerPage}
                totalProduct={allProducts && allProducts.length}
                paginate={paginate}
            />
            </div>
            </>
    )
}