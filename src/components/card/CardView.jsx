import React, { useState, useCallback } from 'react';
import './CardView.css';
import CARD_DATA from '../../../server/cards.js'
import Button from '../button/Button';

const CardView = () => {
  const [card, setCard] = useState(CARD_DATA[0] ?? ''); 
  const [isFront, setFront] = useState(true);

  const handleFlipCard = () => {
    setFront(isFront => !isFront)
  }
  
  const handleSwitchCard = (dir) => {
    console.log('clicked');
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

  const handlePrevCard = useCallback(() => handleSwitchCard('PREVIOUS'), [])
  const handleNextCard = useCallback(() => handleSwitchCard('NEXT'), [])
    
  return (
    <div>
      <div className={`flip-card ${card.level ?? ''}`} onClick={handleFlipCard}>
        <div className={`flip-card-inner ${isFront ? 'front' : ''}`} >
          <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
          <div className="flip-card-back">
              <img srcSet={card.img ?? ''} alt="answer" />
            <p>{(card.answer ?? '')}</p>
          </div>
          {/* {
            (() => {
              switch (isFront) {
                case true:
                  return <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
                case false:
                  return <div className="flip-card-back"><p>{(card.answer ?? '')}</p></div>
                default:
                  return null
              }
            })()
          } */}
        </div>
      </div>
      <div className='dir-btn'>
        {/* <Button onHandleCard={() => handleSwitchCard('PREVIOUS')}>Previous</Button> */}
        {/* <Button onHandleCard={() => handleSwitchCard('NEXT')}>Next</Button> */}
        <Button onHandleCard={handlePrevCard}>Previous</Button>
        <Button onHandleCard={handleNextCard}>Next</Button>
      </div>
    </div>
  );
};

export default CardView;