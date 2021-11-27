import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import '../../css/404.css'

export default class Pagina404 extends Component {
    
    render() {
        return (
            <div className="div-404">
                <h1>Não há nada nessa página, você deve ter digitado a URL incorreta ou não fez seu Login.
                    <span>Clique <Navigate to="/">AQUI</Navigate> e vá para a página de LOGIN</span>
                </h1>
            </div>
        );
    }
}