import produtoLogo from '../../../assets/imgs/icone.png';

import './TitleContentProductCard.css'

export default function TitleContentProductCard({title}) {
  return (
        <section className='TitleContentProductCardContainer'>
            <img src={produtoLogo} alt="" />
            <h1 className='h1TitleContentProductCard'>{title}</h1>
            <img src={produtoLogo} alt="" />
        </section>
  );
}