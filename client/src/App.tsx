import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/editproducts/:id"} element={<ProductDetail />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
