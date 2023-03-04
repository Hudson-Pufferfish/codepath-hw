import React from 'react';
import './Header.css';

const Header = () => {
  const header = "Capital city guess game"
  const headerArr = header.split(' ')

  return (
    <div>
      <header>
        <div class="smoke" >
          <ul>
          {
              headerArr.map((char) => (
              <li key={char}> {char}</li>
            ))
          }
          </ul>
      
        </div>
      </header>
    </div>
  );
};

export default Header;