// import React from 'react'
import "../../assets/css/pages/ministries/rangers.css";
import nextEvent from "../../assets/images/small-groups.jpg";
import Gallery from "../../components/Gallery";
export const RoyalRangersKids = () => {
  return (
    <>
      <div className="section-page-header header-page-title">
        <div className="section-page-header-name">
          ROYAL RANGERS
        </div>
      </div>
      <div className="content">
      <div className="container-center center-fade-in-bottom">
          <img src={nextEvent} alt="" className="center-img"/>
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
        <Gallery/>
      </div>
    </>
  );
};
