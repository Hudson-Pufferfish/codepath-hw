import React, { useCallback } from 'react';
import './AttributeCard.css'

const AttributeCard = ({ attribute, value, setBanList }) => {
  const handleAddBan = useCallback((e) => {
    const attribute = e.target.getAttribute('data-attribute');
    const value = e.target.getAttribute('data-value');
    setBanList(prevBanList => {
      const isDuplicateBan = prevBanList.some((item) => {
        return item[0] === attribute && item[1] === value;
      });
      const newBan = [
        [attribute, value]
      ]
    return isDuplicateBan ? [...prevBanList] : [...prevBanList,...newBan]
  })
  }, [])

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