import Tour1 from '../../assets/imgs/tour-01.png';
import produtoLogo from '../../assets/imgs/icone.png'

import './SectionHeader.css'

export default function SectionHeader(){
    return(
            <div className="sectionHeaderContainerDiv">
                <img src={Tour1} style={{width:'320px',height:'250px'}} alt="" />
                <div style={{gap:'18px'}} className="flexCol">
                    <div className='titleContentH1SectionHeader'>
                        <img src={produtoLogo} alt="" />
                        <h1 className='h1SectionHeader'>A Padaria Requinte</h1>
                        <img src={produtoLogo} alt="" />
                    </div>
                    <p>Muitos de vocês já nos conhecem, e tem um carinho imenso por nós, assim como temos por cada um de vocês.</p>
                    <p>
                        Nossa história começou em 1984 no Bigorrilho, quando no mês de agosto iniciamos esta amizade com a cidade,
                        e com nossos vizinhos que foram os primeiros a acreditarem no nosso projeto. Este projeto que buscou a
                        profissionalização da padaria, e o conceito de boutique de pães, sinônimo de alta qualidade e padronização.
                        Em 2004 acompanhando o crescimento de Curitiba inauguramos mais uma loja no bairro Cabral, que também já é
                        muito querida por todos da cidade.
                    </p>
                    <button className='buttonSectionHeader'>SAIBA MAIS</button>
                </div>
            </div>
    )
}