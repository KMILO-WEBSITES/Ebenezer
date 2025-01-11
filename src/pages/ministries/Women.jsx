import "../../assets/css/pages/ministries/woman.css";
import women from "../../assets/images/women/1.png";
// import { Gallery } from "../../components/Gallery";
import { SectionName } from "../../components/SectionName"
export const Women = () => {
  return (
    <>
      <SectionName sectionName={"MUJERES"}/>
      <div className="container-center center-fade-in-bottom">
          <img src={women} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            Nuestro propósito es proporcionar un espacio donde las mujeres
            puedan crecer en su fe, recibir apoyo espiritual, desarrollar
            relaciones con otras mujeres, y que sean un reflejo del amor de
            Cristo en todas las áreas de sus vidas.
            </b></p>
            </div>
          </div>
        {/* <Gallery/> */}
      </div>
    </>
  );
};
