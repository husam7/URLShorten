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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
