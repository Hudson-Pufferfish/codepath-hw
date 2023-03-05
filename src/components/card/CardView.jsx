import React from 'react';
import './CardView.css';
import { useState } from 'react';
import CARD_DATA from '../../../server/cards.js'
import Button from '../button/Button';

const CardView = () => {
  const [card, setCard] = useState(CARD_DATA[0] ?? ''); 
  const [isFront, setFront] = useState(true);

  const handleFlipCard = () => {
    setFront(isFront => !isFront)
  }

  
  const handleSwitchCard = (dir) => {
    switch (dir) {
      case 'PREVIOUS':
        // const prevCard = CARD_DATA.find(c => c.id === (card.id > 1 ? card.id - 1 : 1))
        const prevCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)]
        setCard(prevCard)
        setFront(true)
        break;
      
      case 'NEXT':
        // const nextCard = CARD_DATA.find(c => c.id === (card.id < CARD_DATA.length - 1 ? card.id + 1 : CARD_DATA.length - 1))
        const nextCard = CARD_DATA[Math.floor(Math.random() * CARD_DATA.length)]
        setCard(nextCard)
        setFront(true)
        break;
      
      default:
        return
    }
  }

  return (
    <div className="card-view">
      <div className={`flip-card ${card.level ?? ''}`} onClick={handleFlipCard}>
        {
          (() => {
            switch (isFront) {
              case true:
                return <div className="flip-card-front">{(card.question ?? '')}</div>
              case false:
                return <div className="flip-card-back">{(card.answer ?? '')}</div>
              default:
                return
            }
          })()
        }
      </div>
      <div className='dir-btn'>
        <Button content="previous" onHandleCard={() => handleSwitchCard('PREVIOUS')}/>
        <Button content="next" onHandleCard={() => handleSwitchCard('NEXT')}/>
      </div>
    </div>
  );
};

export default CardView;