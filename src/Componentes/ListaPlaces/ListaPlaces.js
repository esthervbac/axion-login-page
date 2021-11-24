import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from 'axios'
import '../../css/listas.css'
import '../../Componentes/ListaPlaces/ListaPlaces'

export default class ListaPlaces extends Component {
    
    render() {
        return (
            <div className="conteudo">
                <div className="lista">
                <p>LIST OF PLACES</p>
                <div className="linha"></div>
                <img src="" alt="Imagens da Lista de Lugares" />
                <p className="texto-imagem"></p>
            </div>
        </div>
        );
    }
}