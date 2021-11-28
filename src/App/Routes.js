import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Paginas/Home/Home'
import Foods from '../Paginas/Foods/Foods'
import Places from '../Paginas/Places/Places'
import People from '../Paginas/People/People'
import Pagina404 from '../Paginas/Pagina404/Pagina404'
import Cadastro from '../Paginas/Cadastro/Cadastro'
import PrivateRoute from '../App/PrivateRoute'


  const Rotas = () => (

<BrowserRouter>
    <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/foods" element={<Foods />} />
        </Route>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/people" element={<People />} />
        </Route>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route path="/places" element={<Places />} />
        </Route> 
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="*" element={<Pagina404 />} />
    </Routes>
</BrowserRouter>
);

export default Rotas;