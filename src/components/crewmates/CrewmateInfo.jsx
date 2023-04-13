import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./CrewmateInfo.css";
import { supabase } from "../../client";

const CrewmateInfo = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCrewmate() {
      const { data, error } = await supabase.from("crewmate").select("name, speed").eq("id", id).single();
      if (error) {
        console.error("Error fetching crewmate:", error.message);
      } else {
        console.log("Crewmate:", data);
        setName(data.name);
        setSpeed(data.speed);
      }
    }
    fetchCrewmate();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update the crewmate's name and speed
    const { data, error } = await supabase.from("crewmate").update({ name, speed }).eq("id", id);
    if (error) {
      console.error("Error updating crewmate:", error.message);
    } else {
      console.log("Crewmate updated:", data);
    }
    navigate("/crewmates");
  };

  return (
    <div className="crewmate-info-container">
      <h2 className="crewmate-info-header">Edit Crewmate Information</h2>
      <form className="crewmate-info-form" onSubmit={handleSubmit}>
        <div className="crewmate-info-field">
          <label htmlFor="name">Crewmate name: </label>
          <input type="text" id="name" className="crewmate-info-input" value={name} onChange={handleNameChange} />
        </div>
        <div className="crewmate-info-field">
          <label htmlFor="speed">Crewmate speed: </label>
          <input type="text" id="speed" className="crewmate-info-input" value={speed} onChange={handleSpeedChange} />
        </div>
        <div className="crewmate-info-btn">
          <Link to="/crewmates">
            <button className="crewmate-info-cancel">Cancel</button>
          </Link>
          <button type="submit" className="crewmate-info-button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrewmateInfo;
