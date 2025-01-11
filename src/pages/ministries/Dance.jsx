// import React from 'react'
import "../../assets/css//pages/ministries/dance.css";
import dance from "../../assets/images/dance/1.png";
// import Gallery from "../../components/Gallery";
import { SectionName } from "../../components/SectionName"
export const Dance = () => {
  return (
    <>
      <SectionName sectionName={"DANZA"}/>
      <div className="container-center center-fade-in-bottom">
          <img src={dance} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestro próposito es utilizar la danza como una forma de adoración y
            expresión espiritual, glorificando a Dios a través del movimiento y
            el arte. Tenemos como objetivo glorificar a Dios y enriquecer la
            vida de la iglesia mediante la danza, ofreciendo una forma creativa
            y poderosa de adorar, comunicar mensajes bíblicos, y conectar con la
            congregación y la comunidad en general.
            </b></p>
            </div>
        </div>
        {/* <Gallery/> */}
      </div>
    </>
  );
};
