import React from 'react';
import './Button.css';

const Button = ({ children, onHandleCard }) => {
  
  return (
    <div >
      <button className='btn' onClick={onHandleCard}>{ children.toUpperCase()}</button>
    </div>
  );
};

export default Button;