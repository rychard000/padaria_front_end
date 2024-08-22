import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

import './DetailsProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { useMemo, useRef } from "react";

import doces1 from '../../assets/imgs/doces-1.jpg';
import doces2 from '../../assets/imgs/doces-2.jpg';
import doces3 from '../../assets/imgs/doces-3.jpg';
import doces4 from '../../assets/imgs/doces-4.jpg';

import produto1 from '../../assets/imgs/produto-1.jpeg';
import produto2 from '../../assets/imgs/produto-2.png';
import produto3 from '../../assets/imgs/produto-3.png';
import produto4 from '../../assets/imgs/produto-4.png';
import ProdutoCard from "../common/ProdutoCard/ProdutoCard";


export default function DetailsProduct(){

    const [quantity, setQuantity] = useState(1)
    // const quantityRef = useRef(1);

    if(quantity < 1){
        setQuantity(1)
    }

    // const handleQuantityChange = (e) => {
    //     const newValue = parseInt(e.target.value, 10);
    //     if (newValue < 1) {
    //         quantityRef.current = 1;
    //     } else {
    //         quantityRef.current = newValue;
    //     }
    //     console.log('Nova Quantidade:', quantityRef.current);
    // };

    const location = useLocation();
    const { product } = location.state;
    const productId = product.id

    // const allProducts = [
    //     [
    //         { id:1, img: produto1, titulo: 'Bolo de milho (350g)', preco: 26.50 },
    //         { id:2, img: produto2, titulo: 'Bolo de chocolate com paçoca (400g)', preco: 26.50 },
    //         { id:3, img: produto3, titulo: 'Bolo de paçoca (400g)', preco: 36 },
    //         { id:4, img: produto4, titulo: 'Cesta Arraiá', preco: 142 }
    //     ],
    //     [
    //         { id:5, img: doces1, titulo: 'Bolo Nega Maluca', preco: 68 },
    //         { id:6, img: doces2, titulo: 'Camafeu de nozes com fondant', preco: 68.75 },
    //         { id:7, img: doces3, titulo: 'Torta Alemã', preco: 80.30 },
    //         { id:8, img: doces4, titulo: 'Brigadeiro Preto festa', preco: 48.75 }
    //     ]
    // ]

    const allProducts = useMemo(() => [
        { id: 1, img: produto1, titulo: 'Bolo de milho (350g)', preco: 26.50 },
        { id: 2, img: produto2, titulo: 'Bolo de chocolate com paçoca (400g)', preco: 26.50 },
        { id: 3, img: produto3, titulo: 'Bolo de paçoca (400g)', preco: 36 },
        { id: 4, img: produto4, titulo: 'Cesta Arraiá', preco: 142 },
        { id: 5, img: doces1, titulo: 'Bolo Nega Maluca', preco: 68 },
        { id: 6, img: doces2, titulo: 'Camafeu de nozes com fondant', preco: 68.75 },
        { id: 7, img: doces3, titulo: 'Torta Alemã', preco: 80.30 },
        { id: 8, img: doces4, titulo: 'Brigadeiro Preto festa', preco: 48.75 }
    ], []);

    // console.log(allProducts[1][1]['id'])

    //faca um array direto com os objetos ou seja 1 array e 8 objetos
    // const mapAllProducts = allProducts.flatMap(productList => productList);
    // //metodo de embaralhar os objetos dentro do array,ou seja id 1 de um produto pode ser no final,no inicio,e me tras so os diferente
    // //do produto que o usuario ja esta vendo, e me tras somente 4 dos mesmo para mostrar mais produtos relacionandos
    // const shuffledProducts = mapAllProducts.sort(() => Math.random() - 0.5).filter(product=>product.id !== productId).slice(0,4)

    // console.log(shuffledProducts)

    const shuffledProducts = useMemo(() => 
        allProducts
            .sort(() => Math.random() - 0.5)
            .filter(product => product.id !== productId)
            .slice(0, 4)
    , [productId]);

    return(
        <div>
            <Header/>
            <div className="sectionDetailsProduct">

                <div className="containerOptionsDetailsProduct">

                    <div className="containerDivOptionsDetailsProduct">

                        <img src={product.img} style={{width:'400px', height:'350px'}} alt="" />
                        <div className="cardDetailsProduct">
                            <span style={{color:'var(--MidGrey)', fontSize:'18px'}}>Início / Doces / Bolo de paçoca</span>
                            <h3 style={{fontSize:'30px', color:'var(--DefaultColor)'}}>{product.titulo}</h3>
                            <span style={{fontSize:'17px'}}>
                                <span style={{fontWeight:'bold'}}>REF </span>1050 
                                <span style={{color:'var(--WhiteGrey)'}}> | </span> 
                                <span style={{fontWeight:'bold'}}>Categoria</span>
                                <span style={{color:'var(--DefaultColor)'}}> Doces</span>
                            </span>
                            <hr style={{border:'solid 1.5px var(--WhiteGrey)'}}/>
                            <span style={{color:'var(--DefaultColor)', fontSize:'23px'}}>R$20,00 – R${product.preco},00</span>
                            <select style={{outline:'none', border:'solid 1px var(--WhiteGrey)'}} name="" id="">
                                <option value="escolha-uma-opcao">Escolha uma opcao</option>
                                <option value="400g">400g</option>
                                <option value="500g">500g</option>
                                <option value="600g">600g</option>
                            </select>
                            <div>
                                <input 
                                    className="optionNumberDetailsProduct"
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                                <button className='buttonDetailsProduct'>Comprar</button>
                            </div>
                            <div className="divSocialMediasDetailsProduct">
                                <span>Compartilhe: </span>
                                <div className="flex" style={{gap:'20px'}}>
                                    <FontAwesomeIcon style={{fontSize:'22px'}} icon={faFacebook} />
                                    <FontAwesomeIcon style={{fontSize:'22px'}} icon={faXTwitter} />
                                    <FontAwesomeIcon style={{fontSize:'22px'}} icon={faEnvelope} />
                                    <FontAwesomeIcon style={{fontSize:'22px'}} icon={faWhatsapp} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr style={{border:'solid 1.5px var(--WhiteGrey)', width:'100%'}}/>

                </div>

                <div className="descriptionContainerDetailsProduct">
                    <div className="flexCol" style={{gap:'10px'}}>
                        <div>
                            <button
                                style={{borderTopLeftRadius: '5px'}}
                                className="descriptionButtonsDetailsProduct">
                                    Descrição
                            </button>
                            <button
                                style={{borderTopRightRadius: '5px'}}
                                className="descriptionButtonsDetailsProduct">
                                    Informação adicional
                            </button>
                        </div>
                        <h1 style={{color:'var(--DefaultColor)',fontSize:'30px'}}>Descrição</h1>
                        <span>Suave creme a base de cream cheese e creme de leite, intercalado com bolacha maisena umedecida, coberto com ganache de chocolate.</span>
                    </div>

                    
                    <div className="footerContainerDetailsProduct">
                        <h1 style={{fontSize:'32px', color:'var(--DefaultColor)'}}>Produtos Relacionados</h1>
                        <div>
                            {shuffledProducts.map((product, index)=>(
                                <ProdutoCard key={index} product={product}/>
                            ))}
                        </div>
                    </div>
                    
                </div>


            </div>

            <Footer/>
        </div>
    )
}