import React, { Component } from "react";
import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import '../../css/cabecalho.css'
import ListaPlaces from '../../Componentes/ListaPlaces/ListaPlaces'
import '../../css/listas.css'

export default class Places extends Component {
    
    render() {
        return (
            <>
                <Cabecalho />
                <ListaPlaces />
            </>
        );
    }
}