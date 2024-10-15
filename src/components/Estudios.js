import React from 'react';
import { FaGithub, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiGooglebigquery, SiKotlin, SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import '../styles/Estudios.css';

export const Estudios = () => {
  return (
    <div className='container'>
        <div className='buttons'>
            <FaReact />
            <FaNodeJs />
            <FaGithub />
            <SiMysql />
            <IoLogoJavascript />
            <SiTypescript />
            <RiSupabaseFill />
            <SiKotlin />
            <TbBrandReactNative />
            <FaPython />
            <FaPhp />
            <SiGooglebigquery />
        </div>
        {/* <div>
            <p> 
                <h1>Estudios</h1>
                <strong>Servicio nacional de aprendizaje</strong>
                <br />
                Técnico en programación de software
                <br /> <br />
                <strong>UDEMY</strong>
                <br />
                ReactJS desarrollador
                <br />
                Kotlin
                <br />
                MySQL
            </p>
        </div> */}
      
    </div>
  )
}
