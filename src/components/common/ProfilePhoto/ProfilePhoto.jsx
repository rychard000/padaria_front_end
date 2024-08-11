import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

import doce1 from '../../../assets/imgs/doces-1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { removeAllProducts } from "../../../Redux/Cart/Action";
import { useDispatch } from 'react-redux';
import axios from 'axios';

const ProfilePhoto = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showOptionsProfile, setShowOptionsProfile] = useState(false)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // const isLoggedIn = () => {
  //   return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
  // };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidUser = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (response.status !== 200) {
            handleLogout();
            setShowOptionsProfile(false)
        }else{
            setShowOptionsProfile(true)
        }

    } catch (err) {
      console.log(`opsss ${err}`);
        setShowOptionsProfile(false)
    }
  }

  useEffect(()=>{
      isValidUser()
  },[])

  const logoutUser = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/logout', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (response.status !== 200) {
          console.log('usuario deslogado com sucesso na rota')
          return true
        }
    } catch (err) {
        console.log(`opsss ${err}`);
        return false
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
    const removeDataStorage = !localStorage.getItem('accessToken') && !localStorage.getItem('refreshToken')
    if(removeDataStorage && logoutUser()){
        dispatch(removeAllProducts());
    }
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        sx={{ padding: '0' }}
      >
        <AccountCircle sx={{ fontSize: '57px' }} />
        {/* <img style={{width:'50px', borderRadius:'50%'}} src={doce1} alt="" /> */}
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ position: 'fixed', transform: 'translate(30px, 5px)' }}
      >
        {showOptionsProfile ? (
          <div>
            <Link to='/edit-user'>
              <MenuItem onClick={handleClose}>
                Minha Conta
              </MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>
                Sair
            </MenuItem>
          </div>
        ) : (
            <div>
              <Link to='/register'>
                <MenuItem>
                  Registrar
                </MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem>
                  Entrar
                </MenuItem>
              </Link>
            </div>
        )}
      </Menu>
    </div>
  );
};

export default ProfilePhoto;