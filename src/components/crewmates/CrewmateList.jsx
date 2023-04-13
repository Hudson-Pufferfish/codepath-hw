import React, { useState, useEffect } from "react";
import "./CrewmateList.css";
import Crewmate from "./Crewmate";
import { supabase } from "../../client";

const Crewmates = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    async function fetchCrewmates() {
      const { data, error } = await supabase.from("crewmate").select("id, name, speed, color");
      if (error) {
        console.error("Error fetching crewmates:", error.message);
      } else {
        setCrewmates(data);
      }
    }
    fetchCrewmates();
  }, []);

  return (
    <div className="crewmate-list">
      {crewmates.map((crewmate) => (
        <Crewmate key={crewmate.id} crewId={crewmate.id} name={crewmate.name} speed={crewmate.speed} color={crewmate.color} />
      ))}
    </div>
  );
};

export default Crewmates;
