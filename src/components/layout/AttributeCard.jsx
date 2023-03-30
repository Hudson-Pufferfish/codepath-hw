import React, { useCallback } from 'react';
import './AttributeCard.css'

const AttributeCard = ({ attribute, value }) => {


  return (
    <div 
      className="attribute-container"
      data-attribute={attribute}
      data-value={value}
      onClick={handleAddBan}
    >
      {`${attribute.toUpperCase()} : ${value}`}
    </div>
  );
};

export default AttributeCard;