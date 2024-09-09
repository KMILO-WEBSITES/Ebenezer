// import React from 'react'
import "../../assets/css/styles.css";
import "../../assets/css/us/shepherds.css";
import shepherds from "../../assets/images/main3.jpeg";
export const Shepherds = () => {
  return (
    <>
      <div className="section-page-header section-page-header-img header-page-shepherds-img">
        <div className="section-page-header-name">
          <strong>Nuestros Pastores</strong>
        </div>
      </div>
      <div className="content">
        <div className="container-shepherds">
          <img src={shepherds} alt="Pastores" className="shepherds-img" />

          <div className="shepherds-text">
            <div className="shepherds-description">
              <p>
                Los pastores de nuestra iglesia son líderes espirituales
                dedicados a guiar y cuidar de nuestra comunidad de fe. Su labor
                incluye predicar la Palabra de Dios, ofrecer orientación
                espiritual, y proporcionar apoyo emocional y pastoral a los
                miembros de la congregación. Ellos se comprometen a enseñar y
                vivir el Evangelio, facilitando el crecimiento espiritual de
                todos los miembros a través de sermones, estudios bíblicos, y
                momentos de oración comunitaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
