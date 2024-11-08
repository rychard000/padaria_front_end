import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProfileSettings() {
  const [name, setName] = useState('Detalis undefined');
  const [email, setEmail] = useState('Detalis undefined');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [idUser, setIdUser] = useState('')
  const [profilePicture, setProfilePicture] = useState(null);

  const userInfo = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
      });
      
      if (response.status === 200) {
        console.log(response)
        setIdUser(response.data.user.id)
        setName(response.data.user.name)
        setEmail(response.data.user.email)
      } else {
        throw new Error('Usuário não autenticado');
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    userInfo();
  }, []);

  const saveChangesUser = async () =>{
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/api/new-password/${idUser}`, {
        password: `${newPassword}`,
        password_confirmation: `${newPassword}`
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Envie o token no cabeçalho
        }
      });

      if (response.status === 200) {
        console.log('Senha atualizada com sucesso');
      } else {
        console.log('Erro ao atualizar a senha');
      }
      
    }catch (err){
      console.log('erro ao mandar alteracoes' + err)
      toast.success('Login feito com sucesso!');
    }
  }
  console.log(newPassword)
  console.log(idUser)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePicture(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleDeleteProfilePicture = (event) => {
    setProfilePicture(null)
    event.preventDefault()
  };

  //funcoes para o input de mudar o password
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <ToastContainer />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
            <Link to='/'><FontAwesomeIcon icon={faChevronLeft} style={{fontSize:'24px', position:'relative', right:'150px'}} /></Link>
            Configurações de Perfil
        </Typography>
        <Avatar
          alt="Profile Picture"
          src={profilePicture}
          sx={{ width: 80, height: 80, margin: 2 }}
        />
        <label htmlFor="icon-button-file">
          <input
            accept="image/*"
            id="icon-button-file"
            type="file"
            style={{ display: 'none' }}
            onChange={handleProfilePictureChange}
          />
          <IconButton color="primary" aria-label="upload picture" component="span" style={{color:'var(--DefaultColor)'}}>
            <PhotoCamera />
          </IconButton>
          <h3 onClick={handleDeleteProfilePicture}>Trash</h3>
        </label>
        <h2 style={{alignSelf:'flex-start', marginTop:'10px'}}>Editar Profile</h2>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            disabled
            label="Nome"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            disabled
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Nova Senha"
            type={showPassword ? 'text' : 'password'}  // Corrigido para usar o estado showPassword
            value={newPassword}  // Mantém o estado newPassword
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            onClick={saveChangesUser}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{backgroundColor:'var(--DefaultColor)'}}
          >
            Salvar Alterações
          </Button>
        </Box>
      </Box>
    </Container>
  );
}