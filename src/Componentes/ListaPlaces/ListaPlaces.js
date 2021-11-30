import React, { Component } from "react";
import axios from 'axios'
import '../../css/listas.css'
import '../../Componentes/ListaPlaces/ListaPlaces'

export default class ListaPlaces extends Component {
    state = {
        places: [],
        error: null,
      };

    // Fetch places depois que o componente é montado
    componentDidMount = async () => {

    try {
      const response = await axios.get(`http://localhost:1337/places`);
      this.setState({ places: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
    
    render() {

        const { error, places } = this.state;

        // Erros se ocorrer algum
        if (error) {
            return <div className="mensag-erro">Um erro ocorreu: {error.message}</div>;
        }

        return (
            <div className="conteudo">
                <div className="listagem">
                    <div className="lista">
                        <p>LIST OF PLACES</p>
                        <div className="linha"></div>
                        <section className="cards">
                        {this.state.places.map(places => (
                            <article>
                                <img key={places.id} className="imagem" src={places.link} alt="Imagens da Lista de Lugares" />
                                <p key={places.name} className="texto-imagem">{places.name}</p>
                            </article>
                        ))}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}