// import React from 'react'
import "../../assets/css/base.css";
import "../../assets/css/components/history.css";
import history from "../../assets/images/history/1.jpg";
import { SectionName } from "../../components/SectionName";
export const History = () => {
  return (
    <>
      <SectionName sectionName={"HISTORIA DE LA IGLESIA"} />
      <div className="contenedor-history">
        <div className="imagen-history">
          <img src={history}/>
          </div>
        <div className="descripcion-history">
          <p>
          La Iglesia Eben-Ezer Orlando, fue establecida  por los pastores Pedro y Elena Gomez, 
          familia y un pequeño grupo de colaboradores el 12 de Octubre del 2011 en la ciudad de Orlando Florida y 
          permanece en dicha ciudad hasta el día de hoy por la gracia y misericordia de nuestro Dios.
          </p>
        </div>
      </div>
    </>
  );
};
