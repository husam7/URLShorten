import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavMenu from './components/header/NavMenu';
import Hero from './components/header/Hero';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';
import Resources from './components/resources/Resources'; 
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenu />
    <Hero/>
    <App />
    <Resources />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
