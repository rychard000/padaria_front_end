import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';

export default function AutenticatesRoutes({children}){
    const [autenticateUser, setAutenticateUser] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const userAcces = async() =>{
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
        
                if (response.status === 200) {
                    setAutenticateUser(false);
                } else {
                    setAutenticateUser(true);
                }
            } catch (error) {
                console.log(error);
                setAutenticateUser(true);
            } finally {
                setIsLoading(false);
            }
        }

        userAcces()
    },[])

    if (isLoading) {
        return <div>Loading...</div>; // You can replace this with a spinner or some other loading indicator
    }
    
    return autenticateUser ? children : <Navigate to="/" />;

}