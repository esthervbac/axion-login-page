import React, { Component } from "react";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import iconusername from '../../imgs/user.png'
import iconemail from '../../imgs/mail.png'
import iconpassword from '../../imgs/lock.png'
import '../../css/cadastro.css'
import '../../css/home.css'
import '../../index.css'


export default class Cadastrar extends Component {

// const [username, setUsername] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        axios.post(`http://localhost:1337/auth/local/register`, data).then(
            res => {
                console.log(res)
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


    render () {
        return (
            <div className="container">
                <img src={imagemFundo} alt="Imagem de fundo" />
                <div className="card-cadastro">
                    <form className="cadastro" onSubmit={this.handleSubmit.bind (this)}>
                        <img src={Logo} alt="Logo Orange" />
                        {/* <h2 className="user-info">Seu Cadastro foi realizado com sucesso!</h2> */}
                        <div className="inputLabel">
                            <label>Usuário</label>
                            <input
                                type="text"
                                placeholder="Nome de Usuário"
                                onChange={e => this.username = e.target.value}
                            />
                            <img src={iconusername} alt="Icon de Username" />
                        </div>
                        <div className="inputLabel">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="seunome@email.com"
                                onChange={e => this.email = e.target.value}
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
                        <button type="submit">Cadastrar</button>
                        <NavLink to="/" className="link-login" style={{ textDecoration: 'none' }}>Faça seu Login Clicando Aqui</NavLink>
                        <h4>Termos de Uso • Política de Privacidade</h4>
                    </form>
                </div>
            </div>
        );
    }

}
