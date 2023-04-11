import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./Crewmate.css";

const Crewmate = (props) => {
  const { name, speed, imgSrc } = props;
  const crewId = 5;

  return (
    <div className="crewmate-container">
      <div className="crewmate-image">
        <img src={imgSrc ?? ""} alt="" rel="noreferrer noopener" className="crewmate-img" />
      </div>
      <p className="crewmate-name">Crewmate name: {name ?? "nameless"}</p>
      <p className="crewmate-speed">Crewmate speed: {speed ?? "no speed"}</p>
      <Link to={`${crewId}`}>
        <button className="crewmate-btn">Edit info</button>
      </Link>
    </div>
  );
};

export default Crewmate;
