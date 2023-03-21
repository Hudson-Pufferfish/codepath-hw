import React, { useCallback } from 'react';
import './AttributeCard.css'

const AttributeCard = ({ children, attribute }) => {
  const handleClick = useCallback((e) => {
    switch (attribute) {
      case 'width':
        console.log('clicked width')
        console.log(e.target.className.includes('width'))
        
        case 'height':
        console.log('clicked height')
        case 'origin':
        console.log('clicked origin')
        case 'name':
        console.log('clicked name')
        
        break;
    
      default:
        throw new Error('There is no type of attribute like that!')
    }
  }, [])
  return (
    <div 
      className={`attribute-container ${attribute}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default AttributeCard;