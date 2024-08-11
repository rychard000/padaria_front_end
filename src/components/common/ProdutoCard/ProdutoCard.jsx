import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../Redux/Cart/Action';

import './ProdutoCard.css'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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
    
    const handleAddProduct = () => {
        if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')){
            dispatch(addProductToCart(product));
        }else{
            notify()
        }
    };

    return(
        <div className='produtoCardContainer'>
            <ToastContainer />
            <img src={product.img} style={{width:'251px'}} alt="" />
            <div className='flexCol'>
                <span className='produtoCardTitleSpan'>{product.titulo}</span>
                <span style={{color:'var(--DefaultColor)', fontSize:'18px', paddingBottom:'10px'}}>R$ {product.preco}</span>
                <button className='produtoCardButton'
                    onClick={handleAddProduct}
                >
                    <span style={{paddingRight:'10px'}}>Adicionar</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
                {/* <Link to='/details-product'><span style={{paddingRight:'10px'}}>Ver Produto</span></Link> */}
                <Link to={{
                    pathname: `/product/${product.id}`,
                    state: { product }
                }}>
                    <button>Ver Produto</button>
                </Link>
            </div>
        </div>
    )
}