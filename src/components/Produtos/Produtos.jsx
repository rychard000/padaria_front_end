import ProdutoCard from '../common/ProdutoCard/ProdutoCard';

import produto1 from '../../assets/imgs/produto-1.jpeg';
import produto2 from '../../assets/imgs/produto-2.png';
import produto3 from '../../assets/imgs/produto-3.png';
import produto4 from '../../assets/imgs/produto-4.png';
import TitleContentProductCard from '../common/TitleContentProductCard/TitleContentProductCard';

const produtos = [
  { id:1, img: produto1, titulo: 'Bolo de milho (350g)', preco: 26.50 },
  { id:2, img: produto2, titulo: 'Bolo de chocolate com paçoca (400g)', preco: 26.50 },
  { id:3, img: produto3, titulo: 'Bolo de paçoca (400g)', preco: 36 },
  { id:4, img: produto4, titulo: 'Cesta Arraiá', preco: 142 }
];

export default function Produtos() {
  return (
    <section>
      <TitleContentProductCard title={'Produtos Recentes'}/>
      <div style={{gap:'54px'}} className='justityCenter'>
        {produtos.map((product, index) => (
          <ProdutoCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}