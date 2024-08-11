import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';

import PasswordInput from './PasswordChangeInput';
import { Link } from 'react-router-dom';

export default function ProfileSettings() {
  const [name, setName] = useState('Lucas');
  const [email, setEmail] = useState('lucas@gmail.com');
  const [profilePicture, setProfilePicture] = useState(null);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione a lógica para enviar as mudanças ao backend aqui
  };

  return (
    <Container component="main" maxWidth="xs">
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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
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
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Nova Senha"
            name="password"
            autoComplete="password"
            autoFocus
            value={password}
            onChange={handlePasswordChange}
          /> */}
          <PasswordInput/>
          <Button
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
