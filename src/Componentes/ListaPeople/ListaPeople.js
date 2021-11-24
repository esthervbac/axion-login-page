import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios'
import '../../css/listas.css'
import '../../Componentes/ListaPeople/ListaPeople'

export default class ListaPeople extends Component {
    
    render() {
        return (
            <div className="conteudo">
                <div className="lista">
                    <p>LIST OF PEOPLE</p>
                    <div className="linha"></div>
                    <img src="" alt="Imagens da Lista de Pessoas" />
                    <p className="texto-imagem"></p>
                </div>
            </div>
        );
    }
}