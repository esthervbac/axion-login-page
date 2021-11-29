import React from "react";
import '../../css/home.css'
import imagemFundo from '../../imgs/bg.jpg'
import LoginForm from '../../Componentes/LoginForm/LoginForm'

const Home = () => {
    
    return (
        <div className="container">
            <img src={imagemFundo} alt="Imagem de fundo de um computador" />
        <LoginForm />
        </div>
    );
}

export default Home