import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, redirectUser } from "react-router-dom";
import Logo from '../../imgs/logo.png'
import imagemFundo from '../../imgs/bg.jpg'
import iconusername from '../../imgs/user.png'
import iconemail from '../../imgs/mail.png'
import iconpassword from '../../imgs/lock.png'
import '../../css/cadastro.css'
import '../../index.css'

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    const [validarCampo, setValidarCampo] = useState("none");

    const inputLabel = (e) => {
        setUsername(e.target.value);
        setEmail(e.target.value);
        setPassword(e.target.value);
        setValidarCampo("none");
    }

    async function Cadastrar() {

        const { REACT_APP_BACKEND_URL_ID_REGISTER } = process.env;

        let item = { username, email, password }
        const result = await fetch(`${REACT_APP_BACKEND_URL_ID_REGISTER}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.JSON();
        localStorage.setItem("user-info",JSON.stringify(result));
    }

    // Função para validar campos do formulário Login 
    const validarCamposCadastro = () => {
        
        if ((username == "") && (email == "") && (password == "")) {
            alert("Todos os campos devem ser preenchidos!");
        } else {
            alert("Seu Cadastro foi realizado com sucesso!");
        }
    }
    
    return (
        <div className="container">
            <img src={imagemFundo} />
                <div className="card-cadastro">
                    <form className="cadastro" onSubmit={validarCamposCadastro}>
                        <img src={Logo} alt="Logo Orange" />
                        {/* <h2 className="user-info">Seu Cadastro foi realizado com sucesso!</h2> */}
                        <div className="inputLabel">
                            <label>Usuário</label>
                            <input
                                type="text"
                                value={username}
                                placeholder="Nome de Usuário"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <img src={iconusername} alt="Icon de Username" />
                            <p style={{display:validarCampo}}>Campo obrigatório</p>
                        </div>
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
                        <button type="submit" onClick={Cadastrar}>Cadastrar</button>
                        <NavLink to="/" className="link-login" style={{ textDecoration: 'none' }}>Faça seu Login Clicando Aqui</NavLink>
                        <h4>Termos de Uso • Política de Privacidade</h4>
                    </form>
                </div>
        </div>
    );
}

export default Cadastro