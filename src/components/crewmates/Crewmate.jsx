import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Crewmate.css";

const Crewmate = (props) => {
  const crewmateRef = useRef(null);
  const { name, speed, color, crewId } = props;

  useEffect(() => {
    crewmateRef.current.style.color = color;
  }, []);

  return (
    <div className="crewmate-container">
      <div className="crewmate-image">
        <img src={"src/assets/crewmate.png" ?? ""} alt="" rel="noreferrer noopener" className="crewmate-img" />
      </div>
      <div className="crewmate-info">
        <p className="crewmate-name">Crewmate name: {name ?? "nameless"}</p>
        <p className="crewmate-speed">Crewmate speed: {speed ?? "no speed"}</p>
        <p ref={crewmateRef}>Crewmate color: {color ?? "no color"}</p>

        <Link to={`${crewId}`}>
          <button className="crewmate-btn">Edit info</button>
        </Link>
      </div>
    </div>
  );
};

export default Crewmate;
