import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../../css/listas.css'
import '../../Componentes/ListaFoods/ListaFoods'

export default class ListaFoods extends Component {

    state = {
        foods: [],
        error: null,
      };

    // Fetch foods depois que o componente é montado
    componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/foods');
      this.setState({ foods: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
    
    render() {

        const { error, foods } = this.state;

        // Print errors if any
        if (error) {
        return <div className="mensag-erro">Um erro ocorreu: {error.message}</div>;
        }

        return (
            <div className="conteudo">
                <div className="lista">
                    <p>LIST OF FOODS</p>
                    <div className="linha"></div>
                    <div className="lista-imagens">
                    {this.state.foods.map(foods => (
                    <>
                        <div class="div-img"><img key={foods.id} src={foods.link} alt="Imagens da Lista de Comidas" /></div>
                        <p key={foods.name} className="texto-imagem">{foods.name}</p>
                    </>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}