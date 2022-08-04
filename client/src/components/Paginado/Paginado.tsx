import React from 'react'
import "../Paginado/Paginado.css"

export default function Paginado ({ productsPerPage, totalProduct, paginate }: any) {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProduct / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </div>
          ))}
      </>
    );
  }