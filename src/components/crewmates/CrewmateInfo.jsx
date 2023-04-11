import React from "react";
import { useParams } from "react-router-dom";
import "./CrewmateInfo.css";

const CrewmateInfo = () => {
  const { id } = useParams();

  return (
    <div>
      <div>This is crewmate {id}. Let's edit!</div>
      <form action="">
        Crewmate name: <input type="text" />
        Crewmate speed: <input type="text" />
      </form>
    </div>
  );
};

export default CrewmateInfo;
