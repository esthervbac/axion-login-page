import React, { Component } from "react";
import axios from 'axios'
import '../../css/listas.css'
import '../../Componentes/ListaPeople/ListaPeople'

export default class ListaPeople extends Component {

    state = {
        people: [],
        error: null,
      };

    // Fetch people depois que o componente é montado
    componentDidMount = async () => {

        const { REACT_APP_BACKEND_URL_ID_PAGP } = process.env;

    try {
      const response = await axios.get(`${REACT_APP_BACKEND_URL_ID_PAGP}`);
      this.setState({ people: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };
    
    render() {

        const { error, people } = this.state;

        // Erros se ocorrer algum
        if (error) {
            return <div className="mensag-erro">Um erro ocorreu: {error.message}</div>;
        }

        return (
            <div className="conteudo">
                <div className="listagem">
                    <div className="lista">
                        <p>LIST OF PEOPLE</p>
                        <div className="linha"></div>
                        <section className="cards">
                        {this.state.people.map(people => (
                            <article>
                                <img key={people.id} className="imagem" src={people.link} alt="Imagens da Lista de Pessoas" />
                                <p key={people.name} className="texto-imagem">{people.name}</p>
                            </article>
                         ))}
                        </section>
                    </div>
                </div>
            </div>
            );
        }
    }