import React from 'react';
import "./Card.css";

const Card = (props) => {

  const { name, location, imgSrc, link } = props

  
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img src={imgSrc} alt="" rel="noreferrer noopener" className='card-img' />
      </div>
      <h3 className='card-title'>{ name }</h3>
      <h4 className='card-location'>{ location }</h4>
      <button className='card-btn'><a href={link ?? ""}>Information</a></button>
    </div>
  );
};

export default Card;