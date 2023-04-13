import { useState } from "react";
import "./NewCrewmate.css";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";

const NewCrewmate = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can replace the console log with your own logic to submit the form data

    // Insert a new row into the crewmate table
    const { data, error } = await supabase.from("crewmate").insert({
      name,
      speed,
      color,
    });
    if (error) {
      console.error("Error creating new crewmate:", error.message);
    } else {
      alert("New crewmate created!", data);
      // Reset the form fields
      setName("");
      setSpeed("");
      setColor("");
    }
  };

  const radioOptions = [
    { label: "Red", value: "Red" },
    { label: "Green", value: "Green" },
    { label: "Blue", value: "Blue" },
    { label: "Purple", value: "Purple" },
    { label: "Yellow", value: "Yellow" },
    { label: "Orange", value: "Orange" },
    { label: "Pink", value: "Pink" },
  ];

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="speed">Speed: </label>
        <input type="text" id="speed" value={speed} onChange={handleSpeedChange} />
      </div>
      <div>
        <label>Color: </label>
        <div className="color radio-container">
          {radioOptions.map((option) => (
            <label key={option.value} htmlFor={option.value}>
              <input type="radio" id={option.value} name="color" value={option.value} checked={color === option.value} onChange={handleColorChange} />
              {option.label}
            </label>
          ))}
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCrewmate;
