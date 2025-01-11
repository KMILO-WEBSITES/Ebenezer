// import React from 'react'
import "../../assets/css/pages/ministries/intercession.css";
import inter from "../../assets/images/intercesion/1.png";
import { SectionName } from "../../components/SectionName"
export const Intercession = () => {
  return (
    <>
      <SectionName sectionName={"INTERCESIÓN"}/>
      <div className="container-center center-fade-in-bottom">
          <img src={inter} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Misión: estar siempre vigilantes puestos en la brecha en oración y
            ayuno por nuestra pastores, lideres, iglesia , familiares amigos,
            nuestra comunidad, y nuestros paises.
            </b></p>
            </div>
          </div>
      </div>
    </>
  );
};
