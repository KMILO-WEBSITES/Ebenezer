// import React from 'react'
import "../../assets/css/pages/ministries/men.css";
import men from "../../assets/images/man/1.png";
// import Gallery from "../../components/Gallery";
import { SectionName } from "../../components/SectionName";
export const Men = () => {
  return (
    <>
     <SectionName sectionName={"HOMBRES"}/>
      <div className="container-center center-fade-in-bottom">
          <img src={men} alt="" className="center-img"/>
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
        {/* <Gallery/> */}
      </div>
    </>
  );
};
