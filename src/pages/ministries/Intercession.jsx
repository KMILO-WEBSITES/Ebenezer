// import React from 'react'
import "../../assets/css/base.css";
import inter from "../../assets/images/intercesion/1.png";
import { SectionName } from "../../components/SectionName"
export const Intercession = () => {
  return (
    <>
      <SectionName sectionName={"INTERCESIÓN"}/>
      <div className="contenedor">
        <div className="imagen">
          <img src={inter}/>
          </div>
        <div className="descripcion">
          <p>
            Misión: estar siempre vigilantes puestos en la brecha en oración y
            ayuno por nuestra pastores, lideres, iglesia , familiares amigos,
            nuestra comunidad, y nuestros paises.            
            </p>
          </div>
      </div>
    </>
  );
};
