import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Experiencia.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from '../images/elite.jpg';
import slide_image_2 from '../images/bv.png';
import slide_image_3 from '../images/procex.png';
import slide_image_4 from '../images/api.png';
import slide_image_5 from '../images/garantias.png';
import slide_image_6 from '../images/react-native-logo.png';
import slide_image_7 from '../images/TouchDesignerPro.png';
import slide_image_8 from '../images/angular.png';


function Experiencia () {
  const [activeIndex, setActiveIndex] = useState(0);

  const titles = [
    'Elite Automation Group (Consulta de API, diseño de frontend, creación de interfaz nueva para optimizar el trabajo dentro de la empresa)',
    'BuildVisionAI (Manejo de inteligencia artificial, consulta de API propia y APIs creadas como la de chatgpt y HomeDepot, cálculos sobre planos, herramientas de funcionamiento de planos)',
    'Procex Software (Creación de aplicación móvil en Kotlin, CRUD de usuarios, uso de aplicación sin necesidad de internet)',
    'Implementación básica de consulta de API',
    'Garantías Comunitarias (Desarrollador FullStack, procesamiento de archivos csv para la gestión de riesgos de crédito, pudiendo detectar fraudes y mejorar la toma de decisiones para las entidades financieras)',
    'Proyecto con React Native de calificación de restaurantes en pareja, comparando ambas calificaciones',
    'Creación de script de API para manejar las respuestas de IA y de usuario para guardarlas y así poder acceder a ellas para consultarlas mediante un script de Python en touchdesigner para representar la comunicación mediante visuales gráficas de acuerdo a lo que se esté hablando con la IA',
    'Prueba técnica con Angular y Laravel (CRUD de PHP)',
  ];


  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="container1">
      <Swiper
        spaceBetween={60}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <h1 className="heading">{titles[activeIndex]}</h1>
      {activeIndex === 2 && (
        <>
          <button className="info-button"><a href='https://github.com/xLeaan/ProcexApp' target='_blank' rel="noreferrer">Fronted</a></button>
          <button className="info-button2"><a href='https://github.com/xLeaan/ProcexApp-Backend' target='_blank' rel="noreferrer">Backend</a></button>
        </>
      )}
      {activeIndex === 3 && (
        <>
          <button className="info-button"><a href='https://github.com/xLeaan/prueba' target='_blank' rel="noreferrer">Ver código</a></button>
        </>
      )}
      {activeIndex === 5 && (
        <>
          <button className="info-button"><a href='https://github.com/xLeaan/rate-restaurants-app' target='_blank' rel="noreferrer">Ver código</a></button>
        </>
      )}
      {activeIndex === 6 && (
        <>
          <button className="info-button"><a href='https://github.com/xLeaan/lain' target='_blank' rel="noreferrer">Ver código</a></button>
        </>
      )}
      {activeIndex === 7 && (
        <>
          <button className="info-button"><a href='https://github.com/xLeaan/pruebaAngular' target='_blank' rel="noreferrer">Fronted Angular</a></button>
          <button className="info-button2"><a href='https://github.com/xLeaan/pruebaLaravel' target='_blank' rel="noreferrer">Backend Laravel</a></button>
        </>
      )}
    </div>
  );
};

export default Experiencia;
