import logo from '../../../assets/imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faPix} from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

export default function Footer(){
    return(
        <footer className='footerContainer'>

            <div style={{paddingRight:'20px'}} className='topicsFooterDivs'>
                <div className='itemsCol'>
                    <img src={logo} style={{width:'300px', paddingBottom:'10px'}} alt="" />
                    <span>padaria@exemplo.com.br</span>
                </div>
                <div className='iconsDivFooter'>
                    <FontAwesomeIcon icon={faSquareFacebook} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className='iconsDivFooter'>
                    <FontAwesomeIcon icon={faCcVisa} />
                    <FontAwesomeIcon icon={faCcMastercard} />
                    <FontAwesomeIcon icon={faPix} />
                </div>
            </div>

            <div>
                <div style={{paddingBottom:'20px'}} className='topicsFooterDivs'>
                    <div className='flexCol'>
                        <span style={{color:'var(--TextFooter)'}}>UNIDADE CABRAL</span>
                        <span style={{fontSize:'15px'}}>R. Recife, 34</span>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{fontSize:'18px'}} icon={faWhatsapp} />    
                        <span style={{fontSize:'15px'}}> (00) 6666-6666</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <span style={{fontSize:'15px'}}> (00) 6666-6666</span>
                    </div>
                </div>
                <div style={{paddingBottom:'17px'}} className='topicsFooterDivs'>
                    <div className='flexCol'>
                        <span style={{color:'var(--TextFooter)'}}>UNIDADE CHAMPAGNAT</span>
                        <span style={{fontSize:'15px'}}>R. Francisco Rocha, 1809</span>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{fontSize:'18px'}} icon={faWhatsapp} />    
                        <span style={{fontSize:'15px'}}> (00) 6666-6666</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <span style={{fontSize:'15px'}}> (00) 6666-6666</span>
                    </div>
                </div>
                <span>Confeitaria Requinte EIRELI CNPJ:</span>
                <br />
                <span>78.149.168/0001-50</span>
            </div>

            <div style={{paddingRight:'25px'}} className='topicsFooterDivs'>
                <div>
                    <h1 className='h1Footer'>Conta</h1>
                    <div style={{gap:'2px', fontSize:'15px'}} className='flexCol' >
                        <span>Minha Conta</span>
                        <span>Meus Pedidos</span>
                    </div>
                </div>

                <div>
                    <h1 className='h1Footer'>A Empresa</h1>
                    <div style={{gap:'2px', fontSize:'15px'}} className='flexCol'>
                        <span>Sobre Nós</span>
                        <span>Fale Conosco</span>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='h1Footer'>Sua Compra</h1>
                <div style={{gap:'7px', fontSize:'15px'}} className='flexCol'>
                    <span>Formas de Pagamento</span>
                    <span>Prazo de Entrega</span>
                    <span>Política de Trocas e Devoluções</span>
                    <span>Política de privacidade</span>    
                </div>
            </div>

        </footer>
    )
}