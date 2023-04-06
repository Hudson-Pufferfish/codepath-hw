import "./App.css";
import CatDashboard from "./components/layout/CatDashboard";
import CatItem from "./components/layout/CatItem";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<CatDashboard />} />
          <Route path="/cats/:id" element={<CatItem />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
