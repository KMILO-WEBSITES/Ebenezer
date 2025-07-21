// import React from 'react'
import "../../assets/css/base.css";
import worship from "../../assets/images/adoracion/1.png";
import { ReturnButton } from "../../components/ReturnButton";
import { SectionName } from "../../components/SectionName"
export const Worship = () => {
  return (
    <>
      <SectionName sectionName={"ADORACIÓN"}/>
      <div className="contenedor">
        <div className="imagen">
          <img src={worship}/>
          </div>
        <div className="descripcion">
          <p>
            Nuestro próposito es guiar a la congregación en la adoración a Dios,
            facilitando un ambiente donde las personas puedan experimentar y
            expresar su amor, gratitud y reverencia hacia Él utilizando música,
            cánticos, y otros elementos creativos para enfocar los corazones y
            las mentes de los creyentes en la presencia de Dios. Buscamos
            glorificar a Dios y edificar a la iglesia al dirigir la adoración,
            creando un entorno donde los creyentes puedan conectarse con Dios de
            manera profunda, auténtica, y transformadora.
            </p> 
        </div>
        <ReturnButton />
      </div>
    </>
  );
};
