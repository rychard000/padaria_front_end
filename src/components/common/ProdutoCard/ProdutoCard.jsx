// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../Redux/Cart/Action';

import './ProdutoCard.css'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function ProdutoCard({product}){

    const dispatch = useDispatch();
    const notify = () => toast.error('Faca login para adicionar ao carrinho', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const handleAddProduct = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            console.log(response);
            if (response.status === 200) {
                dispatch(addProductToCart(product));
            } else {
                notify();
            }
        } catch (err) {
            console.error(err);
            notify();
        }
    };
    
    const navigate = useNavigate();
    const handleViewProduct = () => {
        navigate(`/details-product/${product.id}`, { state: { product } });
    };

    return(
        <div className='produtoCardContainer'>
            <ToastContainer />
            <img src={product.img} style={{width:'251px'}} alt="" />
            <div className='flexCol'>
                <span className='produtoCardTitleSpan'>{product.titulo}</span>
                <span style={{color:'var(--DefaultColor)', fontSize:'18px', paddingBottom:'10px'}}>R$ {product.preco}</span>
                {/* <button className='produtoCardButton'
                    onClick={handleAddProduct}
                >
                    <span style={{paddingRight:'10px'}}>Adicionar</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button> */}
                <button onClick={handleViewProduct} className='produtoCardButton'>Ver Produto</button>
            </div>
        </div>
    )
}