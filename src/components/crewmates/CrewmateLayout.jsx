import React from "react";
import { Outlet } from "react-router-dom";

const CrewmateLayout = () => {
  return (
    <>
      <div>This is the website with your crew</div>
      <Outlet />
    </>
  );
};

export default CrewmateLayout;
