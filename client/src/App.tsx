import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from  'react-router-dom'

import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route>
          <Route path={"/"} element={<Home />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
