import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import '../../css/cadastro.css'
import '../../index.css'

export default class Cadastro extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
    };

    handleRegistro = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="container">
                <img src={imagemFundo} alt="Imagem de fundo de um computador" />
                <div className="card-cadastro">
                    <form className="formulario-registro" onSubmit={this.handleRegistro}>
                        <img className="logo-cadastro" src={Logo} alt="Logo Orange" />
                        {this.state.error && <p>{this.state.error}</p>}
                        <label>Usuário</label>
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            onChange={e => this.setState({ username: e.target.value })}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="Senha"
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type="submit">Cadastrar</button>
                        <hr />
                        <Link to="/">Fazer login</Link>
                    </form>
                </div>
            </div>
        );
    }
}