// App.js
import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Links } from './Links';
import { Experiencia } from './components/Experiencia';
import { Estudios } from './components/Estudios';
import { Contacto } from './components/Contacto';

function App() {
  const [isMovedUp, setIsMovedUp] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setIsMovedUp(true);
    } else {
      setIsMovedUp(false);
    }
  }, [location]);


  return (
    <div className="App">
      <div className={`content ${isMovedUp ? 'moved-up' : ''}`}>
        <div className="name">Leandro Pastor</div>
        <div className="info">Desarrollador Fullstack</div>
      </div>

      <Links />

      <div className="route-content">
        <Routes>
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Ruta por defecto o página principal */}
          {/* <Route path="/" element={<div>Bienvenido a mi portafolio. Selecciona una opción del menú.</div>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
