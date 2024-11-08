import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfilePhoto from '../../common/ProfilePhoto/ProfilePhoto';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductCount } from '../../../Redux/Cart/cart-selectors';
import logo from '../../../assets/imgs/logo.png';
import './Header.css';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header() {
  const [getName, setGetName] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const navigate = useNavigate();
  const productsCountCart = useSelector(selectProductCount);

  const handleCartClick = () => {
    navigate('/cart'); // Redirect to the cart page
  };

  const updateUserName = () => {
    const name = localStorage.getItem('userName');
    if (name && name !== '') {
      setUserName(name);
      setGetName(true);
    } else {
      setUserName('');
      setGetName(false);
    }
  };

  useEffect(() => {
    // Initial check
    updateUserName();

    // Listen for storage changes (in case another tab/window updates localStorage)
    window.addEventListener('storage', updateUserName);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('storage', updateUserName);
    };
  }, []);

  return (
    <header className='headerContainer'>
      <Link to='/'><img src={logo} className='linkHomeHeader' alt="Logo" /></Link>
      <ul className='ulHeader'>
        <li className='cursorPointer'>Produtos</li>
        <li className='cursorPointer'>Contato</li>
        <li className='cursorPointer'>Novidades</li>
        <li>
          <IconButton onClick={handleCartClick} aria-label="cart" style={{ color: 'black', padding: '0' }}>
            <StyledBadge badgeContent={productsCountCart} color="primary">
              <ShoppingCartIcon style={{ fontSize: '30px' }} />
            </StyledBadge>
          </IconButton>
        </li>
        <div className='justifyItemsCenter' style={{ gap: '8px' }}>
          {getName && <li className='cursorPointer' style={{ fontSize: '20px', paddingLeft: '15px' }}>Olá! {userName} 👋</li>}
          <ProfilePhoto />
        </div>
      </ul>
    </header>
  );
}
