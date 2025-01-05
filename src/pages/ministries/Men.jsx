// import React from 'react'
import "../../assets/css/pages/ministries/men.css";
import nextEvent from "../../assets/images/small-groups.jpg";
import Gallery from "../../components/Gallery";
export const Men = () => {
  return (
    <>
     <div className="section-page-header header-page-title">
     <div className="section-page-header-name">
          HOMBRES
        </div>
      </div>
      <div className="content">
      <div className="container-center center-fade-in-bottom">
          <img src={nextEvent} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Buscamos equipar a los hombres para que vivan su fe de manera
            íntegra, sean líderes espirituales en sus hogares y comunidades, y
            se conviertan en modelos de carácter y servicio cristiano. Nos
            enfocamos en abordar las necesidades espirituales, emocionales y
            prácticas de los hombres en el contexto de su vida personal,
            familiar, profesional y comunitaria.
            </b></p>
            </div>
          </div>
        </div>
        <Gallery/>
      </div>
    </>
  );
};
