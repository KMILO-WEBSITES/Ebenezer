// import React from 'react'
import "../../assets/css/pages/us/shepherds.css";
import shepherds from "../../assets/images/pastores/1.png";
export const Shepherds = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          NUESTROS PASTORES
        </div>
      </div>
      <div className="content">
        <div className="container-center center-fade-in-bottom">
          <img src={shepherds} alt="Pastores" className="center-img" />
          <div className="center-text">
          <div className="center-text-title">Pedro & Elena Gómez</div>
            <div className="center-description">            
              <p><b>
                Los pastores de nuestra iglesia son líderes espirituales
                dedicados a guiar y cuidar de nuestra comunidad de fe. Su labor
                incluye predicar la Palabra de Dios, ofrecer orientación
                espiritual, y proporcionar apoyo emocional y pastoral a los
                miembros de la congregación. Ellos se comprometen a enseñar y
                vivir el Evangelio, facilitando el crecimiento espiritual de
                todos los miembros a través de sermones, estudios bíblicos, y
                momentos de oración comunitaria.</b>
              </p>
            </div>
          </div>
        </div>        
      </div>
    </>
  );
};
