import React from 'react';
import '../styles/Contacto.css';
import { IoLocationSharp } from 'react-icons/io5';

export const Contacto = () => {
  return (
    <div>
        <div className='container'>
            <p>
                <h1>SOBRE MI</h1>
                 Soy una persona responsable, motivada y con una gran capacidad de aprendizaje de manera autónoma. 
                Estoy comprometido a fortalecer mis conocimientos en programación y abierto a adquirir nuevas habilidades en el proceso. 
                También; poseo facilidad para trabajar en equipo, y aportar ideas innovadoras, siempre respetando las opiniones de los demás personas. 
                Cada desafío que se me presenta lo enfrento con un enfoque de liderazgo y dedicación.
                

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
