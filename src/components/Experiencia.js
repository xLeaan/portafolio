import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

export const Experiencia = () => {
  return (
    <CardGroup style={{ width: '900px', height: '450px' }}>
    <Card >
      <CardImg
        alt="Elite"
        src="/elite.jpg"
        top
        width="50%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Elite Automation Group
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Consulta de API, diseño de frontend, creación de interfaz nueva para optimizar el trabajo dentro de la empresa
        </CardSubtitle>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="BuildVision"
        src="/bv.png"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          BuildVisionAI
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Manejo de inteligencia artificial, consulta de API propia y API's creadas como la de chatgpt y HomeDepot, 
          cálculos sobre planos, herramientas de funcionamiento de planos.
          <br /> <br />
          Uso de Blockchain.  
        </CardSubtitle>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Procex"
        src="/procex.png"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Procex Software
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          Creación de aplicación móvil en Kotlin para uso de personal médico en el cuál se puedan registrar datos de los usuarios y se guarden en una base de datos
          sin necesidad de tener acceso a internet
        </CardSubtitle>
        <Button>
          <a href='https://github.com/xLeaan/ProcexApp' target='_blank' rel="noreferrer">Código fronted</a>
        </Button>
        <Button>
          <a href='https://github.com/xLeaan/ProcexApp-Backend' target='_blank' rel="noreferrer">Código backend</a>
        </Button>
      </CardBody>
    </Card>
  </CardGroup>
  )
}
