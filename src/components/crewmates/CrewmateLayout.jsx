import React from "react";
import { Outlet } from "react-router-dom";
import "./CrewmateLayout.css";

const CrewmateLayout = () => {
  return (
    <>
      <header>
        <h1>View, create and customize your own crewmate character today!</h1>
      </header>
      <Outlet />
    </>
  );
};

export default CrewmateLayout;
