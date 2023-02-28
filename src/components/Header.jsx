import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header>
        <h1 data-text="MLH Hackathons">
          <span class="glitch1" data-text="MLH Hackathons" aria-hidden></span>
          <span class="glitch2" data-text="MLH Hackathons" aria-hidden></span>
          MLH Hackathons
        </h1>
      </header>
    </div>
  );
};

export default Header;