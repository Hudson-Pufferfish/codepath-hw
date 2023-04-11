import React from "react";
import { Link, Outlet } from "react-router-dom";

const CrewmateLayout = () => {
  return (
    <>
      <div>This is the website with your crew</div>
      <Link to="/crewmates">Back to crewmates list</Link>
      <Outlet />
    </>
  );
};

export default CrewmateLayout;
