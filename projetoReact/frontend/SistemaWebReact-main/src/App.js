import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Logo from './components/Logo'; 
import Header from './components/Header'
import Nav from './components/Nav'; 
import Routes from './Routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Logo />
        <Header/>
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
