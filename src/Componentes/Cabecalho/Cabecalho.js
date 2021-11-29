import React, { history, store } from "react";
import { NavLink } from 'react-router-dom';
import Axios from 'axios'
import '../../css/cabecalho.css'
import logo from '../../imgs/logo.png'


const Cabecalho = () => {

    const handleLogout = history => () => {
        store.remove('loggedIn');
        history.push('/');
     }; 
        return (
            <div className="cabecalho">
                <img src={logo} alt="Logo Orange" />
                    <nav>
                        <ul className="nav-links">
                            <NavLink to="/foods" style={{ textDecoration: 'none' }}><li>FOODS</li></NavLink>
                            <NavLink to="/people" style={{ textDecoration: 'none' }}><li>PEOPLE</li></NavLink>
                            <NavLink to="/places" style={{ textDecoration: 'none' }}><li>PLACES</li></NavLink>
                            <NavLink to="/" style={{ textDecoration: 'none' }} onClick={handleLogout(history)}><li>LOGOUT</li></NavLink>
                        </ul>
                    </nav>
            </div>
        );
    }

    export default Cabecalho