import React from "react";
import "./CrewmateList.css";
import Crewmate from "./Crewmate";

const Crewmates = () => {
  return (
    <div className="crewmate-list">
      <Crewmate name="Hudson" speed="20" color={"Red".toLowerCase()} />
      <Crewmate name="Hana" speed="50" />
      <Crewmate name="Beta" speed="40" />
      <Crewmate name="Son Goku" speed="30" />
    </div>
  );
};

export default Crewmates;
