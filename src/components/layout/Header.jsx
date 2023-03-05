import React from 'react';
import './Header.css';

const Header = () => {
  const header = "Test your capital city knowledge here!"
  const headerArr = header.split(' ')

  return (
    <div>
      <header>
         <h1 data-text="Capital City Guess">
          <span className="glitch1" data-text="Capital City Guess" aria-hidden></span>
          <span className="glitch2" data-text="Capital City Guess" aria-hidden></span>
          Capital City Guess
        </h1>
      </header>
        <div className="smoke" >
          <ul>
          {
              headerArr.map((char) => (
              <li key={char}> {char}</li>
            ))
          }
          </ul>
      
      </div>

    </div>
  );
};

export default Header;