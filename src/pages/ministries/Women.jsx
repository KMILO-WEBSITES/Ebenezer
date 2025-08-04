import "../../assets/css/base.css";
import women from "../../assets/images/women/women-info.jpg";
import { ReturnButton } from "../../components/ReturnButton";
import { SectionName } from "../../components/SectionName"
export const Women = () => {
  return (
    <>
      <SectionName sectionName={"MUJERES"}/>
      <div className="contenedor">
      <div className="imagen">
          <img src={women}/>
          </div>
        <div className="descripcion">
          <p>
            Nuestro propósito es proporcionar un espacio donde las mujeres
            puedan crecer en su fe, recibir apoyo espiritual, desarrollar
            relaciones con otras mujeres, y que sean un reflejo del amor de
            Cristo en todas las áreas de sus vidas.
            </p> 
          </div>
          <ReturnButton />
      </div>
    </>
  );
};
