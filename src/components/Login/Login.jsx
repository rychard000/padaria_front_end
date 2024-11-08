import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Login.css'
import API from "../../../http/API";

export default function Login(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const notify = () => toast('Login feito com sucesso!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    // });

    

    const handleLogin = async () => {
        try {
            const response = await API.post('/oauth/token', {
                'grant_type'  : 'password',
                'client_id' : '9c7847af-7ac9-4495-90bd-52f0d326fe5c',
                'client_secret' : 'XjmNXacYvPmTejZxRwmeFr02JvuDxGtkmqMsznwM',
                'username' : `${email}`,
                'password' : `${password}`,
            },
        );
            console.log(response)
            localStorage.setItem('accessToken', response.access_token);
            localStorage.setItem('refreshToken', response.refresh_token);
            
            toast.success('Login feito com sucesso!');    // Exibe o toast
            
            const responseUser = await axios.get('http://127.0.0.1:8000/api/get-user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });

            localStorage.setItem('userName', responseUser.data.user.name);
            
            // Adiciona um atraso para permitir que o toast seja exibido
            setTimeout(() => {
                window.location.href ='/'; // Navega para a página inicial
            }, 1500); // 1.5 segundos de atraso

        } catch (error) {
            console.error('Erro no login', error);    
        }
    };

    return(
        <section>
            <ToastContainer />
            <Header/>
            <div className="loginContainer">
                <button onClick={() => toast("Testando Toast!")}>Test Toast</button>

                {/* <ToastContainer /> */}

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