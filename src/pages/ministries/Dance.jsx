// import React from 'react'
import "../../assets/css/base.css";
import dance from "../../assets/images/dance/1.png";
import { SectionName } from "../../components/SectionName"
import { ReturnButton } from "../../components/ReturnButton"
export const Dance = () => {
  return (
    <>
      <SectionName sectionName={"DANZA"}/>
      <div className="contenedor">
        <div className="imagen">
          <img src={dance}/>
          </div>
        <div className="descripcion">
          <p>
            Nuestro próposito es utilizar la danza como una forma de adoración y
            expresión espiritual, glorificando a Dios a través del movimiento y
            el arte. Tenemos como objetivo glorificar a Dios y enriquecer la
            vida de la iglesia mediante la danza, ofreciendo una forma creativa
            y poderosa de adorar, comunicar mensajes bíblicos, y conectar con la
            congregación y la comunidad en general.
            </p>
        </div>
        <ReturnButton />
      </div>     
    </>
  );
};
