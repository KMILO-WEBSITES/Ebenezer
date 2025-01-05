// import React from 'react'
import "../../assets/css/pages/ministries/kids.css";
import kidsImag from "../../assets/images/small-church-kids.jpg";
import Gallery from "../../components/Gallery";
export const Kids = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          NIÑOS
        </div>
      </div>
      <div className="content">
        <div className="container-center center-fade-in-bottom">
          <img src={kidsImag} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestro propósito es proporcionar una base sólida en la fe desde una
            edad temprana, enseñando a los niños acerca de Dios, la Biblia, y
            los principios cristianos en un entorno seguro, amoroso y adecuado
            para su desarrollo. Nos enfocamos en cultivar en los niños una
            relación temprana con Dios y ayudarlos a entender y aplicar los
            valores cristianos en su vida diaria teniendo como objetivo guiar a
            los niños en sus primeros pasos de fe, ayudándolos a conocer y amar
            a Dios, aprender la Biblia, y vivir de acuerdo con los principios
            cristianos, todo dentro de un entorno seguro y lleno de amor.
            </b></p>
            </div>
          </div>
        </div>
        <Gallery/>
      </div>
    </>
  );
};
