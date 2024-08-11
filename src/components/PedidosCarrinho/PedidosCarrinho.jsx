import { useDispatch, useSelector } from "react-redux"
import { selectProductsTotalPrice } from "../../Redux/Cart/cart-selectors";

import logo from '../../assets/imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProductCardFinally from "../common/ProductCardFinally/ProductCardFinally"
import Footer from '../layouts/Footer/Footer'

import { Link } from "react-router-dom";

import './PedidosCarrinho.css'
import { removeAllProducts } from "../../Redux/Cart/Action";
import ProfilePhoto from "../common/ProfilePhoto/ProfilePhoto";

export default function PedidosCarrinho(){
    const {products} = useSelector((rootReducer) => rootReducer.cartReducer)

    const productsCountTotalPrice = useSelector(selectProductsTotalPrice)

    const dispatch = useDispatch();

    const handleRemoveAllProducts = () => {
        dispatch(removeAllProducts());
    };

    return(
        <main>
            <header className='headerPedidosCarrinho'>
                <Link to='/'><img src={logo} className='linkHomePedidosCarrinho' alt="" /></Link>
                <ul className='ulPedidosCarrinho'>
                    <li>Seu Carrinho</li>
                    <ProfilePhoto/>
                </ul>
            </header>
            <section className="sectionPedidosCarrinho">
                <div className="divContainerSeusPediosPedidosCarrinho">
                    <FontAwesomeIcon icon={faStore} style={{fontSize:'18px'}} />
                    <span>{`>`}</span>
                    <span>Seus Pedidos</span>
                    <span>{`>`}</span>
                    <FontAwesomeIcon icon={faCartShopping} style={{fontSize:'18px'}} />
                </div>
                <div style={{paddingLeft:'100px', gap:'60px'}} className="wrap">
                    {products.map((product, index)=><ProductCardFinally key={index} product={product}/>)}
                </div>
                <div style={{borderTop:'solid 1px black'}} className="divContainerTotalPricePedidosCarrinho">
                    <div style={{gap:'10px'}} className="itemsCenter">
                        <h1 style={{fontSize:'30px', fontWeight:'500'}}>Total</h1>
                        <h1 style={{fontSize:'23px'}}>R$ {productsCountTotalPrice}</h1>
                    </div>
                    <button className='buttonPedidosCarrinho'>Continuar a compra</button>
                    <button onClick={products !== '' ? handleRemoveAllProducts : null}>Excluir Tudo</button>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

