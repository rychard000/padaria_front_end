import axios from 'axios';
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

import './Registrar.css'
import { useNavigate } from 'react-router-dom';

export default function Registrar(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password
            });
            console.log('Registro bem-sucedido');
            navigate('/login')
        }catch(error){
            console.log('Erro no registro')
        }
    }

    return(
        <section>
            <Header/>
            <div className="divContainerHeader">

                <div className="titleContentRegistrar">
                    <FontAwesomeIcon icon={faStore} style={{fontSize:'18px'}} />
                    <span>{`>`}</span>
                    <span>Registrar-se</span>
                    <span>{`>`}</span>
                    <FontAwesomeIcon icon={faAddressCard} style={{fontSize:'18px'}} />
                </div>

                <form onSubmit={handleRegister} className="formContainerRegistrar">
                    <div style={{gap:'5px'}} className='flexCol'>
                        <label htmlFor="">Nome de usuário</label>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)} className='inputFormRegistrar' type="text" />
                    </div>
                    <div style={{gap:'5px'}} className='flexCol'>
                        <label htmlFor="">Email</label>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputFormRegistrar' type="text" />
                    </div>
                    <div style={{gap:'5px'}} className='flexCol'>
                        <label htmlFor="">Senha</label>
                        <input name="password" value={password} onChange={(e) => setPasword(e.target.value)} type="password" className='inputFormRegistrar' />
                    </div>
                    <button type="submit" className='buttonRegistrar'>Registrar</button>
                </form>
            </div>
            <Footer/>
        </section>
    )
}