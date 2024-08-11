import ProdutoCard from '../common/ProdutoCard/ProdutoCard'

import doces1 from '../../assets/imgs/doces-1.jpg';
import doces2 from '../../assets/imgs/doces-2.jpg';
import doces3 from '../../assets/imgs/doces-3.jpg';
import doces4 from '../../assets/imgs/doces-4.jpg';
import TitleContentProductCard from '../common/TitleContentProductCard/TitleContentProductCard';

const doces = [
    { id:5, img: doces1, titulo: 'Bolo Nega Maluca', preco: 68 },
    { id:6, img: doces2, titulo: 'Camafeu de nozes com fondant', preco: 68.75 },
    { id:7, img: doces3, titulo: 'Torta Alemã', preco: 80.30 },
    { id:8, img: doces4, titulo: 'Brigadeiro Preto festa', preco: 48.75 }
];

export default function Doces(){
    return(
        <section style={{paddingBottom:'160px'}}>
            <TitleContentProductCard title={'Doces'}/>
            <div style={{gap:'54px'}} className='justityCenter'>
                {doces.map((product, index) => (
                    <ProdutoCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}