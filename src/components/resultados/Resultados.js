import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from '../tools/Style'
import Options from '../data/Options'
import { Button, Avatar, Container, Grid, TextField, Typography } from '@mui/material';


const results = () => {
    return (
        <Container maxWidth="xs">
            <div style={styles.paper}>
                <img height="130dp" src="https://i.imgur.com/zMuw7AT.jpeg" alt="banner"/>
                <h1 style={{textAlign:"center"}}> Resultados </h1>
                <form style={styles.form}>
                    <Grid container spacing={2}>
                        
                        <Grid item xs={12} md={6}>
                            <Typography component="h5" variant="h6">
                            <b>Orden</b>
                            </Typography>
                            {/* Reemplazar Options por el valor del combobox correcto */}
                            <Select id="cbxOrden" options={Options} />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography component="h5" variant="h6">
                            <b>Examen</b>
                            </Typography>
                            <Select id="cbxExamen" options={Options} />
                        </Grid>

                        <Grid item xs={12} md={16}>
                            <Typography component="h5" variant="h6">
                                <b>Resultado:</b>
                            </Typography>
                            <textarea name="txtResults" rows="5" cols="50" placeholder="Ingrese los resultados...">
                            </textarea>
                        </Grid>

                        <Grid item xs={12} md={6}>
                        <Typography component="h5" variant="h6">
                                <b>Observaciones:</b>
                            </Typography>
                            <textarea name="txtObservaciones" rows="5" cols="50" placeholder="Ingrese sus observaciones...">
                            </textarea>
                        </Grid>
                    </Grid>

                    <div style={styles.test}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Button data-inline="true" type="submit" fullWidth variant="contained" color="primary" style={styles.submit}>
                                    Guardar
                                </Button>

                                <Button data-inline="true" type="reset" fullWidth variant="contained" color="error" style={styles.submit}>
                                    Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                        <br></br>
                        <br></br>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default results;