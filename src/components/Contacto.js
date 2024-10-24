import React from 'react';
import '../styles/Contacto.css';
import { IoLocationSharp } from 'react-icons/io5';

export const Contacto = () => {
  return (
    <div>
        <div className='container'>
            <p>
                <h1>SOBRE MI</h1>
                Persona responsable, motivado y aprendiz autónomo, dispuesto a reforzar mis conocimientos en programación
                aprendiendo nuevas cosas en el camino, con facilidad para el trabajo en equipo aportando ideas nuevas y respetando las demás,
                enfrentando con liderazgo los nuevos retos que se impongan.
            </p>
            <br />
        <p>
            <h2>CONTACTO</h2>
            <strong>Teléfono</strong>
            <br /> 
            +57 3107970174
            <br /> 
            <strong>Email</strong>
            <br />
            leanandrespr@gmail.com
            <br /> 
            <strong>Github</strong>
            <br />
            <a href='https://github.com/xLeaan' target='_blank' rel="noreferrer">xLeaan</a>
            <br /> <br />
            <IoLocationSharp />
            Medellín, Colombia
            

        </p>
        
        </div>
    </div>
  )
}
