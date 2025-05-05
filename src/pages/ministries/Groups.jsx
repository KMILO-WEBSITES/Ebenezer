// import React from 'react'
import "../../assets/css/base.css";
import nextEvent from "../../assets/images/group/group1.jpg";
import { SectionName } from "../../components/SectionName"
export const Groups = () => {
  return (
    <>
      <SectionName sectionName={"GRUPOS PEQUEÑOS"}/>
      <div className="contenedor">
        <div className="imagen">
        <img src={nextEvent}/>       
        </div>
        <div className="descripcion">
          <p>
            Nuestros Grupos Pequeños están creados para desarrollar una relación
            cercana y mantener la comunión entre los hermanos. Creciendo y
            glorificando a Dios juntos, mientras confraternizamos, comemos y nos
            divertimos con nuestra familia en Cristo.                    
            </p>
          </div>
      </div>             
    </>
  );
};
