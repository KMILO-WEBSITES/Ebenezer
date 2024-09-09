// import React from 'react'
import "../../assets/css/styles.css";
import "../../assets/css/components/ministeries.css";
import nextEvent from "../../assets/images/small-groups.jpg";
export const Groups = () => {
  return (
    <>
      <div className="section-page-header section-page-header-img header-page-groups-img">
        <div className="section-page-header-name">
          <strong>Grupos pequeños</strong>
        </div>
      </div>
      <div className="content">
      <div className="container-small-groups">
        <div>
        <img src={nextEvent} alt="" className="small-groups-img" />
        </div>
        <div>
        <p>
          Nuestros Grupos Pequeños están creados para desarrollar una relación
            cercana y mantener la comunión entre los hermanos. Creciendo y
            glorificando a Dios juntos, mientras confraternizamos, comemos y nos
            divertimos con nuestra familia en Cristo.
          </p></div>         
          
        </div>
      </div>
    </>
  );
};
