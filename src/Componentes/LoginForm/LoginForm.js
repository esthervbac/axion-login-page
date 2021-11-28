import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import iconemail from '../../imgs/mail.png'
import iconpassword from '../../imgs/lock.png'
import '../../css/loginform.css'
import '../../index.css'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const [validarCampo, setValidarCampo] = useState("none");

    const inputLabel = (e) => {
        setEmail(e.target.value);
        setPassword(e.target.value);
        setValidarCampo("none");
    }
      
    async function Cadastrar() {

        const { REACT_APP_BACKEND_URL_ID_LOGIN } = process.env;

        let item = { email, password }
        const result = await fetch(`${REACT_APP_BACKEND_URL_ID_LOGIN}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
    }
    
    return (
        <div className="container">
            <img src={imagemFundo} />
                <div className="card-cadastro">
                    <div className="cadastro">
                        <img src={Logo} alt="Logo Orange" />
                        {/* <h2 className="user-info">Seu Cadastro foi realizado com sucesso!</h2> */}
                        <div className="inputLabel">
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="seunome@email.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <img src={iconemail} alt="Icon de Email" />
                            <p style={{display:validarCampo}}>Campo obrigatório</p>
                        </div>
                        <div className="inputLabel">
                            <label>Senha</label>
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <img src={iconpassword} alt="Icon de Password" />
                            <p style={{display:validarCampo}}>Campo obrigatório</p>
                        </div>
                        <input type="checkbox" className="mostrarSenha" name="mostrarSenha" />
                        <span>Mostrar a senha</span>
                        <p>Problemas para acessar sua conta?</p>
                        <button type="submit" onClick={Cadastrar}>Acessar</button>
                        <div className="linha-login">
                            <span>ou</span>
                        </div>
                        <button type="submit" onClick={Cadastrar} className="btn-login-cadastro">Cadastrar</button>
                        <h4>Termos de Uso • Política de Privacidade</h4>
                    </div>
                </div>
        </div>
    );
}

export default LoginForm