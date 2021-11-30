import React, { Component } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import iconemail from '../../imgs/mail.png'
import iconpassword from '../../imgs/lock.png'
import '../../css/loginform.css'
import '../../index.css'


export default class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            identifier: this.identifier,
            password: this.password
        };

        axios.post(`http://localhost:1337/auth/local`, data).then(
            res => {
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    // Função para mostrar senha ao marcar checkbox
    mostrarSenha = e => {
        document.getElementById('showPassword').onclick = function () {
            if (this.checked) {
                document.getElementById('password').type = "text";
            } else {
                document.getElementById('password').type = "password";
            }
        };
    }

    render() {
        return (
            <div className="container">
                <img src={imagemFundo} alt="Imagem de fundo" />
                <div className="card-cadastro">
                    <form className="cadastro" name="formulario" onSubmit={this.handleSubmit.bind(this)}>
                        <img src={Logo} alt="Logo Orange" />
                        <div className="inputLabel">
                            <label>Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="seunome@email.com"
                                onChange={e => this.identifier = e.target.value}
                            />
                            <img src={iconemail} alt="Icon de Email" />
                        </div>
                        <div className="inputLabel">
                            <label>Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={e => this.password = e.target.value}
                            />
                            <img src={iconpassword} alt="Icon de Password" />
                        </div>
                        <div className="inputMostrarSenha">
                            <input type="checkbox" name="mostrarSenha" id="showPassword" onClick={this.mostrarSenha.bind(this)} />
                            <span>Mostrar a senha</span>
                        </div>
                        <p>Problemas para acessar sua conta?</p>
                        <button type="submit">Acessar</button>
                        <div className="linha-login">
                            <span>ou</span>
                        </div>
                        <Link to="/cadastrar" style={{ textDecoration: 'none' }} className="btn-login-cadastro">Cadastrar</Link>
                        <h4 className="termos-texto">Termos de Uso • Política de Privacidade</h4>
                    </form>
                </div>
            </div>
        );
    }
}