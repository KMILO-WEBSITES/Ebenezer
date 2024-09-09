// import React from 'react'
import "../../assets/css/styles.css";
import "../../assets/css/components/ministeries.css";
import nextEvent from "../../assets/images/small-church-kids.jpg";
export const Kids = () => {
  return (
    <>
      <div className="section-page-header section-page-header-img header-page-kids-img">
        <div className="section-page-header-name">
          <strong>Niños</strong>
        </div>
      </div>
      <div className="content">
        <div className="container-kids">
          <img src={nextEvent} alt="" className="kids-img" />
          <p>
            Nuestro propósito es proporcionar una base sólida en la fe desde una
            edad temprana, enseñando a los niños acerca de Dios, la Biblia, y
            los principios cristianos en un entorno seguro, amoroso y adecuado
            para su desarrollo. Nos enfocamos en cultivar en los niños una
            relación temprana con Dios y ayudarlos a entender y aplicar los
            valores cristianos en su vida diaria teniendo como objetivo guiar a
            los niños en sus primeros pasos de fe, ayudándolos a conocer y amar
            a Dios, aprender la Biblia, y vivir de acuerdo con los principios
            cristianos, todo dentro de un entorno seguro y lleno de amor.
          </p>
        </div>
      </div>
    </>
  );
};
