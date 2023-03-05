import React, { memo } from 'react';
import './Button.css';

const Button = ({ children, onHandleCard }) => {  
  return (
    <div >
      <button className='btn' onClick={onHandleCard}>{ children.toUpperCase()}</button>
    </div>
  );
};

export default memo(Button);