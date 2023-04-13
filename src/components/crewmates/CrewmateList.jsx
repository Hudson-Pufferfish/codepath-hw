import React from "react";
import "./CrewmateList.css";
import Crewmate from "./Crewmate";

const Crewmates = () => {
  return (
    <div className="crewmate-list">
      <Crewmate name="Hudson" speed="20" color="red"></Crewmate>
      <Crewmate name="Hana" speed="50"></Crewmate>
      <Crewmate name="Beta" speed="40"></Crewmate>
      <Crewmate name="Son Goku" speed="30"></Crewmate>
    </div>
  );
};

export default Crewmates;
