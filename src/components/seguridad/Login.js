import { Avatar, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from '../tools/Style';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import { loginUsuario } from '../../actions/UsuarioAction';

const Login = () =>{
    
    const [usuario, setUsuario] = useState({
        email: '',
        password: '',
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setUsuario( anterior => ({
            ...anterior,
            [name] : value
            //nombre : jose
        }))
    }

    const loginUsuarioBoton = e => {
        e.preventDefault();
        loginUsuario(usuario).then(response =>{
            console.log('Login exitoso ', response);
            window.localStorage.setItem('token_seguridad', response.data.token);
        });
    }
    return ( 
        <Container maxWidth="xs">
            <div style={style.paper}>
                <Avatar style={style.avatar}>
                    <LockClockOutlinedIcon style={style.icon}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login de Usuario
                </Typography>
                <form style={style.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} m={6}>
                            <TextField variant="outlined" label="Ingrese su email" name="email" onChange={ingresarValores} value={usuario.email} fullWidth />
                        </Grid>
                        <Grid item xs={6} m={6}>
                            <TextField variant="outlined" type="password" label="Ingrese su contraseña" name="password" onChange={ingresarValores} value={usuario.password} fullWidth />
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={6} m={6}>
                        <Button type="submit" onClick={loginUsuarioBoton} fullWidth variant="contained" color="primary" style={style.submit} >
                            Iniciar Sesión
                        </Button>
                    </Grid>
                </form>
            </div>
        </Container>
     );
}

export default Login;