// import React from 'react'
import "../../assets/css/base.css";
import royal from "../../assets/images/royal/1.png";
import { SectionName } from "../../components/SectionName"
export const RoyalRangersKids = () => {
  return (
    <>
      <SectionName sectionName={"ROYAL RANGERS"}/>
      <div className="contenedor">
        <div className="imagen">
          <img src={royal}/>
          </div>
        <div className="descripcion">
          <p>
            The royal rangers is a ministry for boys and young men in grades
            K-12 and our mission is to evangelize, equip and empower the next
            generation so they may become Christlike men and lifelong servant
            leaders.            
            </p>
        </div>
      </div>
    </>
  );
};
