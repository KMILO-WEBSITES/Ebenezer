// import React from 'react'
import "../../assets/css/pages/ministries/groups.css";
import nextEvent from "../../assets/images/group/group1.jpg";
export const Groups = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          GRUPOS PEQUEÑOS
        </div>
      </div>
      <div className="container-center center-fade-in-bottom">       
        <img src={nextEvent} alt="" className="center-img"/>       
        <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestros Grupos Pequeños están creados para desarrollar una relación
            cercana y mantener la comunión entre los hermanos. Creciendo y
            glorificando a Dios juntos, mientras confraternizamos, comemos y nos
            divertimos con nuestra familia en Cristo.
            </b></p>
            </div>
          </div>
        </div>        
          <div>
      </div>             
    </>
  );
};
