import React, { Component } from "react";
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

        // Erros se ocorrer algum
        if (error) {
          return <div className="mensag-erro">Um erro ocorreu: {error.message}</div>;
        }

        return (
            <div className="conteudo">
                <div className="listagem">
                  <p>LIST OF FOODS</p>
                  <div className="linha"></div>
                    <section className="cards">
                    {this.state.foods.map(foods => (
                      <article>
                        <img key={foods.id} className="imagem" src={foods.link} alt="Imagens da Lista de Comidas" />
                        <p key={foods.name} className="texto-imagem">{foods.name}</p>
                      </article>
                    ))}
                    </section>
                  </div>
            </div>
        );
      }
    }