import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { Component } from 'react';
import styles from '../tools/Style';

const RegistrarUsuario = () => {
    return (
        <Container component = "main" maxdwith="md" justify = "center">
        <div style={styles.paper}>
        <Typography component="h1" variant="h5">
            Registro de usuario
        </Typography>

        <form style={styles.form}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField name="nombre" variant="outlined" fullWidth label="Ingrese su nombre" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name="username" variant="outlined" fullWidth label="Ingrese su usuario"/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name="password" type="password" variant="outlined" fullWidth label="Ingrese su contraseña"/>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField name="cPassword" type="password" variant="outlined" fullWidth label="Confirme su contraseña"/>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={styles.submit}>
                        Enviar
                    </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button type="reset" fullWidth variant="contained" color="error" size="large" style={styles.submit}>
                        Cancelar
                    </Button>
                </Grid>
            </Grid>

        </form>

        </div> 
        </Container>
    )
}

export default RegistrarUsuario;