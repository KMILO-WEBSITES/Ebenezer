// import React from 'react'
import "../../assets/css//pages/ministries/dance.css";
import nextEvent from "../../assets/images/small-groups.jpg";
// import Gallery from "../../components/Gallery";
export const Dance = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          DANZA
        </div>
      </div>
      <div className="content">
      <div className="container-center center-fade-in-bottom">
          <img src={nextEvent} alt="" className="center-img"/>
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
        </div>
        {/* <Gallery/> */}
      </div>
    </>
  );
};
