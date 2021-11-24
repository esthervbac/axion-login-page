import React, { Component } from "react";
import Cabecalho from '../../Componentes/Cabecalho/Cabecalho'
import '../../css/cabecalho.css'
import ListaPeople from '../../Componentes/ListaPeople/ListaPeople'
import '../../css/listas.css'

export default class People extends Component {
    
    render() {
        return (
            <>
                <Cabecalho />
                <ListaPeople />
            </>
        );
    }
}