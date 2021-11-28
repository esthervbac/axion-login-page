import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import iconemail from '../../imgs/mail.png'
import iconpassword from '../../imgs/lock.png'
import '../../css/loginform.css'
import '../../index.css'

const LoginForm = () => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function Logando() {

        const { REACT_APP_BACKEND_URL_ID_LOGIN } = process.env;

        let item = { identifier, password }
        const result = await fetch(`${REACT_APP_BACKEND_URL_ID_LOGIN}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.JSON();
        localStorage.setItem("user-info", JSON.stringify(result));
    }

    // Função para validar campos do formulário Login 
    const validarCamposLogin = () => {
        
        if ((identifier == "") && (password == "")) {
            alert("Todos os campos devem ser preenchidos!");
        }
    }

    // Função para mostrar senha ao marcar checkbox
    const mostrarSenha = () => {
        document.getElementById('showPassword').onclick = function () {
            if (this.checked) {
                document.getElementById('password').type = "text";
            } else {
                document.getElementById('password').type = "password";
            }
        };
    }

    return (
        <div className="container">
            <img src={imagemFundo} alt="Imagem de fundo" />
            <div className="card-cadastro">
                <form className="cadastro" name="formulario" onSubmit={validarCamposLogin}>
                    <img src={Logo} alt="Logo Orange" />
                    {/* <h2 className="user-info">Seu Cadastro foi realizado com sucesso!</h2> */}
                    <div className="inputLabel">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            value={identifier}
                            placeholder="seunome@email.com"
                            onChange={(e) => setIdentifier(e.target.value)}
                        />
                        <img src={iconemail} alt="Icon de Email" />
                    </div>
                    <div className="inputLabel">
                        <label>Senha</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <img src={iconpassword} alt="Icon de Password" />
                    </div>
                    <div className="inputMostrarSenha">
                        <input type="checkbox" name="mostrarSenha" id="showPassword" onClick={mostrarSenha} />
                        <span>Mostrar a senha</span>
                    </div>
                    <p>Problemas para acessar sua conta?</p>
                    <button type="submit" onClick={Logando}>Acessar</button>
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

export default LoginForm