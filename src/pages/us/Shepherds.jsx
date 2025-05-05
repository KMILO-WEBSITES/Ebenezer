// import React from 'react'
import "../../assets/css/base.css";
import shepherds from "../../assets/images/pastores/1.png";
import { SectionName } from "../../components/SectionName";
export const Shepherds = () => {
  return (
    <>
      <SectionName sectionName={"NUESTROS PASTORES"} />
      <div className="contenedor">
        <div className="imagen">
          <img src={shepherds} alt="Pastores"/>
          </div>
        <div className="descripcion">
          <p>
              Los pastores de nuestra iglesia son líderes espirituales dedicados
              a guiar y cuidar de nuestra comunidad de fe. Su labor incluye
              predicar la Palabra de Dios, ofrecer orientación espiritual, y
              proporcionar apoyo emocional y pastoral a los miembros de la
              congregación. Ellos se comprometen a enseñar y vivir el Evangelio,
              facilitando el crecimiento espiritual de todos los miembros a
              través de sermones, estudios bíblicos, y momentos de oración
              comunitaria.
              </p>
        </div>
      </div>
    </>
  );
};
