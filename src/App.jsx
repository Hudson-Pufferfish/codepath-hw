import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import CrewmateRoutes from "./components/crewmates/CrewmateRoutes";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/crewmates" end>
              Crewmates Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/crewmates/new" end>
              Create new crewmate
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/crewmates/*" element={<CrewmateRoutes />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
