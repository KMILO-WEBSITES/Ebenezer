// import React from 'react'
import "../../assets/css/pages/ministries/young.css";
import youngImg from "../../assets/images/young/young1.png";
export const Young = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          JÓVENES
        </div>
      </div>
        <div className="container-center center-fade-in-bottom">          
            <img src={youngImg} alt="" className="center-img" />          
            <div className="center-text">
            <div className="center-description">
          <p><b>
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
              </b></p>
            </div>
          </div>
      </div>
    </>
  );
};

