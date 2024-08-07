import React from 'react';
import './App.css';
import Routes from './components/Routes';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Main/>
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
