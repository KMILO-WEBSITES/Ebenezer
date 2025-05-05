// import React from 'react'
import "../assets/css/pages/ministeries.css";
import { SectionName } from "../components/SectionName"
import kidsImag from "../assets/images/small-church-kids.jpg";
import youngImg from "../assets/images/young/young1.png";
import nextEvent from "../assets/images/group/group1.jpg";
import women from "../assets/images/women/1.png";
import men from "../assets/images/man/1.png";
import inter from "../assets/images/intercesion/1.png";
import dance from "../assets/images/dance/1.png";
import worship from "../assets/images/adoracion/1.png";
import royal from "../assets/images/royal/1.png";
export const Ministeries = () => {
  return (
    <>
      <SectionName sectionName={"MINISTERIOS"}/>  
        <div className="cards-container-ministeries">
          <div className="card-ministeries" onClick={() => window.location.href = '/kids'}>
            <img src={kidsImag} className="card-image" />
            <div className="card-title">Niños</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/young'}>
            <img src={youngImg} className="card-image" />
            <div className="card-title">Jóvenes</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/groups'}>
            <img src={nextEvent} className="card-image" />
            <div className="card-title">Grupos pequeños</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/women'}>
            <img src={women} className="card-image" />
            <div className="card-title">Mujeres</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/men'}>
            <img src={men} className="card-image" />
            <div className="card-title">Hombres</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/intercession'}>
            <img src={inter} className="card-image" />
            <div className="card-title">Interceción</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/dance'}>
            <img src={dance} className="card-image" />
            <div className="card-title">Danza</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/worship'}>
            <img src={worship} className="card-image" />
            <div className="card-title">Adoración</div>
          </div>
          <div className="card-ministeries" onClick={() => window.location.href = '/rangers'}>
            <img src={royal} className="card-image" />
            <div className="card-title">Royal Rangers</div>
          </div>
        </div> 
    </>
  );
};
