// import React from 'react'
import "../../assets/css/base.css";
import men from "../../assets/images/man/1.png";
import { SectionName } from "../../components/SectionName";
export const Men = () => {
  return (
    <>
     <SectionName sectionName={"HOMBRES"}/>
     <div className="contenedor">
     <div className="imagen">
          <img src={men}/>
          </div>
        <div className="descripcion">
          <p>
            Buscamos equipar a los hombres para que vivan su fe de manera
            íntegra, sean líderes espirituales en sus hogares y comunidades, y
            se conviertan en modelos de carácter y servicio cristiano. Nos
            enfocamos en abordar las necesidades espirituales, emocionales y
            prácticas de los hombres en el contexto de su vida personal,
            familiar, profesional y comunitaria.            
            </p>
          </div>
      </div>
    </>
  );
};
