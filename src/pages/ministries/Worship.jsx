// import React from 'react'
import "../../assets/css/pages/ministries/worship.css";
import worship from "../../assets/images/adoracion/1.png";
import { SectionName } from "../../components/SectionName"
export const Worship = () => {
  return (
    <>
      <SectionName sectionName={"ADORACIÓN"}/>
      <div className="container-center center-fade-in-bottom">
          <img src={worship} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestro próposito es guiar a la congregación en la adoración a Dios,
            facilitando un ambiente donde las personas puedan experimentar y
            expresar su amor, gratitud y reverencia hacia Él utilizando música,
            cánticos, y otros elementos creativos para enfocar los corazones y
            las mentes de los creyentes en la presencia de Dios. Buscamos
            glorificar a Dios y edificar a la iglesia al dirigir la adoración,
            creando un entorno donde los creyentes puedan conectarse con Dios de
            manera profunda, auténtica, y transformadora.
            </b></p>
            </div>
        </div>
      </div>
    </>
  );
};
