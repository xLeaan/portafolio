import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Links } from './Links';
import { Estudios } from './components/Estudios';
import { Contacto } from './components/Contacto';
import Experiencia from './components/Experiencia';
import { Sublinks } from './Sublinks';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMovedUp, setIsMovedUp] = useState(false);

  React.useEffect(() => {
    if (location.pathname !== '/') {
      setIsMovedUp(true);
    } else {
      setIsMovedUp(false);
    }
  }, [location]);

  return (
    <div className="App">
      <div className={`content ${isHomePage ? 'home' : isMovedUp ? 'moved-up' : ''}`}>
        <div className="name">Leandro Pastor</div>
        <div className="info">Desarrollador Fullstack</div>
      </div>

      <Links />
      <Sublinks />

      <div className="route-content">
        <Routes>
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
