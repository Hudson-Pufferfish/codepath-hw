import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <h1 data-text="Capital city guess game">
          <span class="glitch1" data-text="MLH Hackathons" aria-hidden></span>
          <span class="glitch2" data-text="MLH Hackathons" aria-hidden></span>
          Capital city guess game
        </h1>
      </header>
    </div>
  );
};

export default Header;