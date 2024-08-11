import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import produto1 from '../../assets/imgs/produto-1.jpeg';

import './DetailsProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { useLocation } from 'react-router-dom';

export default function DetailsProduct(){

    const location = useLocation();
    console.log(location.state)
    const { product } = location.state;

    return(
        <div>
            <Header/>
            <div className="sectionDetailsProduct">

                <div className="containerOptionsDetailsProduct">

                    <div className="containerDivOptionsDetailsProduct">

                        <img src={product.img} style={{width:'400px', height:'350px'}} alt="" />
                        <div className="cardDetailsProduct">
                            <span style={{color:'var(--MidGrey)', fontSize:'18px'}}>Início / Doces / Bolo de paçoca</span>
                            <h3 style={{fontSize:'30px', color:'var(--DefaultColor)'}}>{product.title}</h3>
                            <span style={{fontSize:'17px'}}>
                                <span style={{fontWeight:'bold'}}>REF </span>1050 
                                <span style={{color:'var(--WhiteGrey)'}}> | </span> 
                                <span style={{fontWeight:'bold'}}>Categoria</span>
                                <span style={{color:'var(--DefaultColor)'}}> Doces</span>
                            </span>
                            <hr style={{border:'solid 1.5px var(--WhiteGrey)'}}/>
                            <span style={{color:'var(--DefaultColor)', fontSize:'23px'}}>R$20,00 – R$36,00</span>
                            <select style={{outline:'none', border:'solid 1px var(--WhiteGrey)'}} name="" id="">
                                <option value="escolha-uma-opcao">Escolha uma opcao</option>
                                <option value="400g">400g</option>
                                <option value="500g">500g</option>
                                <option value="600g">600g</option>
                            </select>
                            <div>
                                <input className="optionNumberDetailsProduct" type="number" value='1'/>
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
                            Products....
                        </div>
                    </div>
                    
                </div>


            </div>

            <Footer/>
        </div>
    )
}