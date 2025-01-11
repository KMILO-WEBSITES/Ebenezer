// import React from 'react'
import "../../assets/css/pages/ministries/rangers.css";
import royal from "../../assets/images/royal/1.png";
// import Gallery from "../../components/Gallery";
import { SectionName } from "../../components/SectionName"
export const RoyalRangersKids = () => {
  return (
    <>
      <SectionName sectionName={"ROYAL RANGERS"}/>
      <div className="content">
      <div className="container-center center-fade-in-bottom">
          <img src={royal} alt="" className="center-img"/>
          <div className="center-text">
            <div className="center-description">
          <p><b>
            The royal rangers is a ministry for boys and young men in grades
            K-12 and our mission is to evangelize, equip and empower the next
            generation so they may become Christlike men and lifelong servant
            leaders.
            </b></p>
            </div>
          </div>
        </div>
        {/* <Gallery/> */}
      </div>
    </>
  );
};
