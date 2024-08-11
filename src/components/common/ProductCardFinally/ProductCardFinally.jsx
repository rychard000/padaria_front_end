import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ItemCounter from "../ItemCounter/ItemCounter";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../Redux/Cart/Action";

import './ProductCardFinally.css'

export default function ProductCardFinally({product}){

    const dispatch = useDispatch();

    function handleRemoveClick(){
        dispatch(removeProduct(product))
    }

    return(
        <div className="productCardFinallyContainer">

            <div style={{gap:'22px'}} className="flex">
                <img src={product.img} style={{borderRadius:'10px', width:'221px'}}alt="" />

                <div style={{paddingTop:'50px'}} className='flex'>
                    <div style={{gap:'2px'}} className="flexCol">
                        <span className="firstSpanDivProductCardFinally">{product.titulo}</span>
                        <span className="secondSpanDivProductCardFinally">R$ {product.preco}</span>
                        <ItemCounter product={product}/>
                    </div>
                    <FontAwesomeIcon onClick={handleRemoveClick} style={{fontSize:'19px', color:'grey', cursor:'pointer'}} icon={faXmark} />
                </div>
            </div>

        </div>
    )
}