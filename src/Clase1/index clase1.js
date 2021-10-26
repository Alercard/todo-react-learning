import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from '../App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/* Entendiendo Componentes y elementos
ReactDOM.render(
  <App saludo="Hi desde propiedades">
    <h1>H1, Mala practica porque esto debe ser otro componente</h1>
    Saludo desde children
  </App>,
  document.getElementById('root')
);
*/
/* se reemplaza por una version resumida
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
posterior mente se explicara como ayuda reportwevvitals
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/