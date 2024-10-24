import React from 'react';
import './styles/Links.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

export const Sublinks = () => {
  return (
    <div className='bottom-left-links'>
        <a href='https://www.linkedin.com/in/leandro-pastor-dev' target='_blank' rel="noreferrer"><FaLinkedin size={30} /></a>
        <a href='https://github.com/xLeaan' target='_blank' rel="noreferrer"><FaGithubSquare size={30} /></a>
        <a href='https://profile.indeed.com/?hl=es_CO&co=CO&from=gnav-notifcenter' target='_blank' rel="noreferrer"><SiIndeed size={30} /></a>
        
      </div>
  )
}
