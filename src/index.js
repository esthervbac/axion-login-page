import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from '../src/Paginas/Home/Home'
import Foods from '../src/Paginas/Foods/Foods'
import Places from '../src/Paginas/Places/Places'
import People from '../src/Paginas/People/People'

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/people" element={<People />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </BrowserRouter> 
  </>,
  document.getElementById('root')
);