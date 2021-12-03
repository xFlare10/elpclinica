import { Avatar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import logo from '../../../logo.svg';


const useStyle = makeStyles((theme) => ({
    seccionDesktop:{
        display:"none"
        
    },
    seccionMobile : {
        display : "flex"
    },
    grow: {
        flexgrow :0
    },
    avatarSize : {
        width : 40,
        height : 40
    }
}));

const BarSesion = () => {
    const classes = useStyle();
    return (
        <Toolbar>
            <IconButton color="inherit">
                <i className="material-icons">menu</i>
            </IconButton>

            <Typography variant="h6">🏥 Clínica ELP</Typography>
            {/* Esta vrg no sirveeeeeeeeeeeeeeeeeeeeeeeeeeeeee*/}
            <Button color="inherit" href="../components/resultados/Ordenes">
                Ordenes
            </Button>
            <Button color="inherit" href="../components/resultados/Resultados">
                Resultados
            </Button>


            <div className={classes.seccionMobile}>
                <IconButton color="inherit">
                    <i className="material-icons">more_vert</i>
                </IconButton>
            </div>
        </Toolbar>
    );
};

export default BarSesion;