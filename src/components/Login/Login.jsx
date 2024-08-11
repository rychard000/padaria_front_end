import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import './Login.css'

export default function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/oauth/token', {
                'grant_type'  : 'password',
                'client_id' : '9c7847af-7ac9-4495-90bd-52f0d326fe5c',
                'client_secret' : 'XjmNXacYvPmTejZxRwmeFr02JvuDxGtkmqMsznwM',
                'username' : `${email}`,
                'password' : `${password}`,
            },
        );
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('refreshToken', response.data.refresh_token);
            navigate('/')

            console.log('Login bem-sucedido', response.data);

            axios.get('http://127.0.0.1:8000/api/get-user',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(resp=>console.log(resp))

        } catch (error) {
            console.error('Erro no login', error);    
        }
    };


    return(
        <section>
            <Header/>
            <div className="loginContainer">

                <div className="entrarDivLogin">
                    <FontAwesomeIcon icon={faStore} style={{fontSize:'18px'}} />
                    <span>{`>`}</span>
                    <span>Entrar</span>
                    <span>{`>`}</span>
                    <FontAwesomeIcon icon={faUser} style={{fontSize:'18px'}} />
                </div>

                <div className="formLoginContainer">
                    <div style={{gap:'6px'}} className="flexCol">
                        <label htmlFor="">Email </label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="inputFormLogin"/>
                    </div>
                    <div style={{gap:'6px'}} className="flexCol">
                        <label htmlFor="">Senha</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="inputFormLogin"/>
                    </div>
                    <div style={{gap:'8px'}} className="flexCol">
                        <button onClick={handleLogin} className="loginButton">Login</button>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}