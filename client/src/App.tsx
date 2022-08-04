import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from  'react-router-dom'

import Home from './components/Home/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
