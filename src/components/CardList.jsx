import React from 'react';
import Card from './Card';
import './CardList.css';
import EVENTS_DATA from "../../server/events.js";
// console.log("🚀 -----------------------------🚀")
// console.log("🚀 ~ EVENTS_DATA:", EVENTS_DATA)
// console.log("🚀 -----------------------------🚀")


const CardList = () => {

  return (
    <div className='card-list'>
      {
        EVENTS_DATA ? EVENTS_DATA.map(event => (
          <Card key={event.id} {...event}></Card>
        )) : null
      }
    </div>
  );
};

export default CardList;