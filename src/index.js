import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Links } from './Links';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <Links />
    <div className="App">
      <App />  
    </div>
  </div>
   
);

