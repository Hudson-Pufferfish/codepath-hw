import React from "react";
import { useParams } from "react-router-dom";

const CrewmateInfo = () => {
  const { id } = useParams();

  return <div>This is crewmate {id}</div>;
};

export default CrewmateInfo;
