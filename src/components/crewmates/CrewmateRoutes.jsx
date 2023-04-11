import React from "react";
import { Route, Routes } from "react-router-dom";
import CrewmateList from "./CrewmateList";
import CrewmateInfo from "./CrewmateInfo";
import NewCrewmate from "./NewCrewmate";
import CrewmateLayout from "./CrewmateLayout";

const CrewmateRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<CrewmateLayout />}>
          <Route index element={<CrewmateList />}></Route>
          <Route path=":id" element={<CrewmateInfo />}></Route>
          <Route path="new" element={<NewCrewmate />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default CrewmateRoutes;
