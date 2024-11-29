// import React from 'react'
import "../../assets/css/styles.css";
import nextEvent from "../../assets/images/small-groups.jpg";
import Gallery from "../../components/Gallery";
export const Women = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          MUJERES
        </div>
      </div>
      <div className="content">     
      <div className="container-center center-fade-in-bottom">
          <img src={nextEvent} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestro propósito es proporcionar un espacio donde las mujeres
            puedan crecer en su fe, recibir apoyo espiritual, desarrollar
            relaciones con otras mujeres, y que sean un reflejo del amor de
            Cristo en todas las áreas de sus vidas.
            </b></p>
            </div>
          </div>
        </div>
        <Gallery/>
      </div>
    </>
  );
};
