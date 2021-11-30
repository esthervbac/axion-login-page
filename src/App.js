import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Paginas/Home/Home'
import Foods from '../src/Paginas/Foods/Foods'
import Places from '../src/Paginas/Places/Places'
import People from '../src/Paginas/People/People'
import Cadastro from '../src/Paginas/Cadastro/Cadastro'
import Pagina404 from '../src/Paginas/Pagina404/Pagina404'

const App = () => (
        <Router>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/foods" element={<Foods />} /> 
                <Route path="/people" element={<People />} /> 
                <Route path="/places" element={<Places />} /> 
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </Router>
);

export default App;