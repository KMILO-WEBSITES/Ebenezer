// import React from 'react'
import "../../assets/css/base.css";
import youngImg from "../../assets/images/young/young1.png";
import { SectionName } from "../../components/SectionName"
export const Young = () => {
  return (
    <>
      <SectionName sectionName={"JÓVENES"}/>
      <div className="contenedor">
      <div className="imagen">     
            <img src={youngImg} alt="" className="center-info-img" />          
            </div>
        <div className="descripcion">
          <p>
              Nuestro próposito es guiar a los jóvenes en su desarrollo
              espiritual, ayudándoles a construir una relación personal con
              Dios, y prepararlos para enfrentar los desafíos de la vida con una
              fe sólida. Nos enfocamos en acompañar a los jóvenes durante una
              etapa crucial de sus vidas, donde toman decisiones importantes
              sobre su identidad, valores, y futuro. Buscamos como ministerio
              inspirar y equipar a los jóvenes para que vivan su fe de manera
              auténtica, desarrollen un carácter conforme al corazón de Dios, y
              se conviertan en líderes comprometidos en la iglesia y en la
              sociedad.
              </p> 
          </div>
      </div>
    </>
  );
};

