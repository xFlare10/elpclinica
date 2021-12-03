import React, { Component }  from 'react';
import logo from './logo.svg';
import { ThemeProvider} from "@emotion/react"
import { Button, Grid, TextField } from '@mui/material';
import './App.css';
import theme from './components/tools/Theme';
import RegistrarUsuario from './components/seguridad/RegistrarUsuario';
import Login from './components/seguridad/Login';
import Resultados from './components/resultados/Resultados'
import Header from './components/Header/Header'
import Ordenes from './components/resultados/Ordenes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PerfilUsuario from './components/seguridad/PerfilUsuario';
import AppNavBar from './components/navigation/AppNavBar';

function App() {
  return (
    <themeProvider theme={theme}>
      {/*<Router>
        <Routes>
          <Route exact path="./components/resultados/Ordenes" component={Ordenes}/>
          <Route exact path="./components/resultados/Resultados" component={Resultados}/>
        </Routes>
      </Router>
      
      <Header />
      <h1 style={{textAlign:"center"}}>Main page</h1>
      <h1 style={{textAlign:"center"}}>[Clearly Example]</h1>
      <Login />
      <Resultados />
      <Ordenes />*/}

      <Router>
        <ThemeProvider theme={theme}>
          <Grid container>
          <AppNavBar>
            <Routes>
              
              <Route exact path='/auth/login' element={<Login />} />
              <Route exact path='/auth/registrar' element={ <RegistrarUsuario />} />
              <Route exact path='/auth/perfil' element={ <PerfilUsuario />} />
              <Route exact path="/" element={ <Login />} />
            </Routes>
            </AppNavBar>
            <Login />
            <Ordenes />
            <Resultados />
          </Grid>
        </ThemeProvider>
      </Router>
    </themeProvider>
  );
}

export default App;
