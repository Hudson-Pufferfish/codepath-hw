import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Crewmate.css";

const Crewmate = (props) => {
  const crewmateRef = useRef(null);
  const { name, speed, color } = props;
  const crewId = 3;

  useEffect(() => {
    console.log(crewmateRef.current);
    crewmateRef.current.style.color = color;
  }, []);

  return (
    <div className="crewmate-container">
      <div className="crewmate-image">
        <img src={"src/assets/crewmate.png" ?? ""} alt="" rel="noreferrer noopener" className="crewmate-img" />
      </div>
      <div className="crewmate-props">
        <p className="crewmate-name">Crewmate name: {name ?? "nameless"}</p>
        <p className="crewmate-speed">Crewmate speed: {speed ?? "no speed"}</p>
        <p ref={crewmateRef}>Crewmate color: {color ?? "no color"}</p>
      </div>
      <Link to={`${crewId}`}>
        <button className="crewmate-btn">Edit info</button>
      </Link>
    </div>
  );
};

export default Crewmate;
