import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from  'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import EditProducts from './components/Forms/EditProduct';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/editproducts/:id"} element={<ProductDetail />} />
            <Route path={"/edit/:id"} element={<EditProducts />} />
           </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
