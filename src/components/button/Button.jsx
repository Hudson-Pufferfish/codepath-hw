import React from 'react';
import './Button.css';

const Button = ({ content, onHandleCard }) => {
  
  return (
    <div >
      <button className='btn' onClick={onHandleCard}>{ content.toUpperCase()}</button>
    </div>
  );
};

export default Button;