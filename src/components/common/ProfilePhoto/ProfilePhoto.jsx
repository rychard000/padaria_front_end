// import React, { useEffect, useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// import { Link, useNavigate } from 'react-router-dom';
// import { removeAllProducts } from "../../../Redux/Cart/Action";
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import API from '../../../../http/API';

// const ProfilePhoto = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [showOptionsProfile, setShowOptionsProfile] = useState(false)

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };
  
//   // const isLoggedIn = () => {
//   //   return localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
//   // };

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const isValidUser = async () => {
//     try {
//         const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         });
//         if (response.status !== 200) {
//             dispatch(removeAllProducts());
//             localStorage.removeItem('accessToken');
//             localStorage.removeItem('refreshToken');
//             localStorage.removeItem('userName');
//             setShowOptionsProfile(false)
//             console.log('nao esta altenticado')
//         }else{
//             setShowOptionsProfile(true)
//         }

//     } catch (err) {
//       console.log(err);
//         setShowOptionsProfile(false)
//     }
//   }

//   useEffect(()=>{
//       isValidUser()
//   },[])

//   const logoutUser = async () => {
//     try {
//         const response = await API.post('/api/logout');
//         if (response.status !== 200) {
//           console.log('usuario deslogado com sucesso na rota')
//           return true
//         }
//     } catch (err) {
//         console.log(`opsss ${err}`);
//         return false
//     }
//   }

//   const handleLogout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     localStorage.removeItem('userName');
//     navigate('/login');
//     const removeDataStorage = !localStorage.getItem('accessToken') && !localStorage.getItem('refreshToken')
//     if(removeDataStorage && logoutUser()){
//         dispatch(removeAllProducts());
//     }
//   };

//   return (
//     <div>
//       <IconButton
//         size="large"
//         aria-label="account of current user"
//         aria-controls="menu-appbar"
//         aria-haspopup="true"
//         onClick={handleMenu}
//         sx={{ padding: '0' }}
//       >
//         <AccountCircle sx={{ fontSize: '57px' }} />
//         {/* <img style={{width:'50px', borderRadius:'50%'}} src={doce1} alt="" /> */}
//       </IconButton>
//       <Menu
//         id="menu-appbar"
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         sx={{ position: 'fixed', transform: 'translate(30px, 5px)' }}
//       >
//         {showOptionsProfile ? (
//           <div>
//             <Link to='/edit-user'>
//               <MenuItem onClick={handleClose}>
//                 Minha Conta
//               </MenuItem>
//             </Link>
//             <MenuItem onClick={handleLogout}>
//                 Sair
//             </MenuItem>
//           </div>
//         ) : (
//             <div>
//               <Link to='/register'>
//                 <MenuItem>
//                   Registrar
//                 </MenuItem>
//               </Link>
//               <Link to='/login'>
//                 <MenuItem>
//                   Entrar
//                 </MenuItem>
//               </Link>
//             </div>
//         )}
//       </Menu>
//     </div>
//   );
// };

// export default ProfilePhoto;

import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { Link, useNavigate } from 'react-router-dom';
import { removeAllProducts } from "../../../Redux/Cart/Action";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import API from '../../../../http/API';

const ProfilePhoto = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showOptionsProfile, setShowOptionsProfile] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidUser = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      
      if (response.status === 200) {
        setShowOptionsProfile(true);
      } else {
        throw new Error('Usuário não autenticado');
      }
    } catch (err) {
      console.log(err);
      dispatch(removeAllProducts());
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userName');
      setShowOptionsProfile(false);
    }
  };

  useEffect(() => {
    isValidUser();
  }, []);

  const logoutUser = async () => {
    try {
      const response = await API.post('/api/logout');
      if (response.status !== 200) {
        console.log('Falha ao deslogar na rota');
      } else {
        console.log('Usuário deslogado com sucesso');
      }
    } catch (err) {
      console.log(`Erro ao deslogar: ${err}`);
    }
    return true;
  };

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userName');
    dispatch(removeAllProducts());
    navigate('/login');
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