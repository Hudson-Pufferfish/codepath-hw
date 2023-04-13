import React, { useState, useEffect } from "react";
import "./CrewmateList.css";
import Crewmate from "./Crewmate";
import { supabase } from "../../client";

const CrewmateList = () => {
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
    <>
      <h3 className="gallery-title">{`There ${crewmates.length > 1 ? "are" : "is"} currently ${crewmates.length} ${
        crewmates.length > 1 ? "crewmates" : "crewmate"
      } in the gallery`}</h3>
      <div className="crewmate-list">
        {crewmates.map((crewmate) => (
          <Crewmate key={crewmate.id} crewId={crewmate.id} name={crewmate.name} speed={crewmate.speed} color={crewmate.color} />
        ))}
      </div>
    </>
  );
};

export default CrewmateList;
