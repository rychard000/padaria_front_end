import logo from '../../../assets/imgs/logo.png'
import ProfilePhoto from '../../common/ProfilePhoto/ProfilePhoto'

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import {selectProductCount} from '../../../Redux/Cart/cart-selectors'

import './Header.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

export default function Header(){

    const navigate = useNavigate(); // Initialize navigate
    const productsCountCart = useSelector(selectProductCount)
    
    const handleCartClick = () => {
        navigate('/cart'); // Redirect to the cart page
    };

    return(
        <header className='headerContainer'>
            <Link to='/'><img src={logo} className='linkHomeHeader' alt="" /></Link>
            <ul className='ulHeader'>
                <li className='cursorPointer'>Produtos</li>
                <li className='cursorPointer'>Contato</li>
                <li className='cursorPointer'>Novidades</li>
                <li>
                    <IconButton onClick={handleCartClick} aria-label="cart" style={{color:'black', padding:'0'}}>
                        <StyledBadge badgeContent={productsCountCart} color="primary">
                            <ShoppingCartIcon style={{fontSize:'30px'}}/>
                        </StyledBadge>
                    </IconButton>
                </li>
                <ProfilePhoto/>
            </ul>
        </header>
    )
}