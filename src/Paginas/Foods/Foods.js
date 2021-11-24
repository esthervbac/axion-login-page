import React, { Component } from "react";
import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import '../../css/cabecalho.css'
import ListaFoods from '../../Componentes/ListaFoods/ListaFoods'
import '../../css/listas.css'

export default class Foods extends Component {
    
    render() {
        return (
            <>
                <Cabecalho />
                <ListaFoods />
            </>
        );
    }
}