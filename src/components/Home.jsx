import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header>
        <h1>This is your home page in this crewmate website</h1>
      </header>
      <main>
        <div className="img-container">
          <img src="src/assets/home.jpg" alt="Home background image" className="img-home" />
        </div>
      </main>
    </div>
  );
};

export default Home;
