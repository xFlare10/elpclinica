import { Container, Grid, Typography } from '@mui/material';
import Select from 'react-select'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';

import styles from '../tools/Style'
import Options from '../data/Options'

const tablaData = [
    { id: 1, test: "Prueba" },
    { id: 2, test: "Prueba2" }
]

const columnas= [
    {
        name: "ID",
        selector: 'id',
        sortable: true
    },
    {
        name: "Test",
        selector: 'test',
        sortable: true
    },
    {
        name: "Test2",
        selector: 'null',
        sortable: true
    }
]

const Ordenes = () => {
    return (
        <Container maxWidth="xs">
            <div style={styles.paper}>
                <img height="130dp" src="https://i.imgur.com/PrunSbE.jpg" alt="banner"/>
                <h1 style={{textAlign:"center"}}> Órdenes </h1>

                <Grid item xs={12} md={6}>
                            <Typography component="h5" variant="h6">
                            <b>Tipo de Orden</b>
                            </Typography>
                            {/* Reemplazar Options por el valor del combobox correcto */}
                            <Select id="cbxOrden" options={Options} />
                </Grid>

                <div className="table-responsive">
                    <DataTable columns={columnas} data={tablaData} title="Tabla de prueba" pagination fixedHeader/>
                </div>
            </div>
            <br></br>
            <br></br>

        </Container>

    )

}

export default Ordenes;