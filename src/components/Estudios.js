import React, { useEffect, useState } from 'react';
import { FaGitAlt, FaGithub, FaNodeJs, FaPhp, FaPython, FaReact, FaRegLightbulb } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiSupabaseFill } from 'react-icons/ri';
import { SiGooglebigquery, SiKotlin, SiMysql, SiTypescript } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import '../styles/Estudios.css';
import { Tooltip } from 'reactstrap';

export const Estudios = (args) => {
  const [tooltipOpen, setTooltipOpen] = useState('');
  const [texto, setTexto] = useState('');
  const [showTitles, setShowTitles] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleTooltip = (id) => {
    setTooltipOpen((prev) => (prev === id ? '' : id));
  };

  const handleClick = (nombre) => {
    setTexto(nombre);
    setShowTitles((prev) => !prev);
  };

  useEffect(() => {
    const animationDuration = 2000; 
    const stopDuration = 2000; 

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false); 
      }, animationDuration); 
    }, animationDuration + stopDuration); 

    return () => clearInterval(interval); 
  }, []);

  const icons = [
    { component: <FaReact />, id: 'React', tooltip: 'ReactJS' },
    { component: <FaNodeJs />, id: 'Node', tooltip: 'NodeJS' },
    { component: <FaGithub />, id: 'Github', tooltip: 'Github' },
    { component: <FaGitAlt />, id: 'Git', tooltip: 'Git' },
    { component: <SiMysql />, id: 'Mysql', tooltip: 'MySQL' },
    { component: <IoLogoJavascript />, id: 'Javascript', tooltip: 'JavaScript' },
    { component: <SiTypescript />, id: 'Typescript', tooltip: 'TypeScript' },
    { component: <RiSupabaseFill />, id: 'Supabase', tooltip: 'Supabase' },
    { component: <SiKotlin />, id: 'Kotlin', tooltip: 'Kotlin' },
    { component: <TbBrandReactNative />, id: 'ReactNative', tooltip: 'React Native' },
    { component: <FaPython />, id: 'Python', tooltip: 'Python' },
    { component: <FaPhp />, id: 'PHP', tooltip: 'PHP' },
    { component: <SiGooglebigquery />, id: 'BigQuery', tooltip: 'BigQuery' },
  ];

  return (
    <>
      <div className='header-izq'>
        <FaRegLightbulb size={30} className={isAnimating ? "blinking-icon" : "stopped"} onClick={() => handleClick(
          
          <>
            <h2>Titulos</h2>
            <strong>Servicio Nacional de Aprendizaje:</strong>
            <br />
            Técnico en programación de software 
            <br />
            2022 - 2023
            <br /> <br />
            <strong>Udemy:</strong>
            <br />
            Desarrollador ReactJS
            <br />
            Desarrollador Kotlin
            <br />
            Desarrollador MySQL
            <br />
            2022 - 2023
            <br /> <br />
            <strong>Idiomas:</strong>
            <br />
            Ingles B2
            <br />
            Español nativo
          </>,
          setIsAnimating(false)
          )}>Titulos</FaRegLightbulb>
        <br /> <br />
        {showTitles && texto}
      </div>
      
      <div className='containerEstudios'>
        <div className='buttons'>
          {icons.map(({ component, id, tooltip }) => (
            <div key={id} >
              <div
                id={id}
                onMouseEnter={() => toggleTooltip(id)}
                onMouseLeave={() => toggleTooltip('')}
              >
                {component}
              </div>
              <Tooltip
                {...args}
                isOpen={tooltipOpen === id}
                target={id}
                toggle={() => toggleTooltip(id)}
                placement='top'
                className='Tooltip'
              >
                {tooltip}
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

Estudios.args = {
  autohide: true,
  flip: true,
};

Estudios.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};
