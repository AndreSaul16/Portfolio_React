import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Contacto from './components/contact/Contacto';
import Home from './components/Index';
import Portfolio from './components/portfolio/Portfolio';
import resum2 from './components/resume/resum2';
import Resume from './components/resume/Resume';

function App() {
  return (<>
    <CssBaseline />
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/portafolio' exact component={Portfolio} />
        <Route path='/contacto' exact component={Contacto} />
        <Route path='/linkedin' component={() => {
          window.location.href = 'https://www.linkedin.com/in/saul-briceño';
        }} />
        <Route path='/github' component={() => {
          window.location.href = 'https://github.com/AndreSaul16';
        }} />
        <Route path='/csharp' component={() => {
          window.location.href = 'https://github.com/AndreSaul16/Flota-de-Vehiculos.git';
        }} />
        <Route path='/java' component={() => {
          window.location.href = 'https://github.com/AndreSaul16/Tetris';
        }} />
        <Route path='/html-css' component={() => {
          window.location.href = 'https://github.com/AndreSaul16';
        }} />
        <Route path='/javascript' component={() => {
          window.location.href = 'https://github.com/AndreSaul16/Portfolio_React.git';
        }} />
      </Switch>
    </BrowserRouter>
  </>);
}

export default App;
