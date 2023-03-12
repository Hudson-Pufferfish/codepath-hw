import React, { useState, useCallback } from 'react';
import './CardView.css';
import CARD_DATA from '../../../server/cards.js'
import Button from '../button/Button';
import PostForm from '../Form/PostForm';

const CardView = () => {
  const [card, setCard] = useState(CARD_DATA[0] ?? ''); 
  const [isFront, setFront] = useState(true);
  const [post, setPost] = useState();
  
  const handleSubmitForm = useCallback((data) => {
    setPost(data)
  }, [])

  const handleFlipCard = useCallback(() => {
    setFront(isFront => !isFront)
  }, [])
  
  const handleSwitchCard = useCallback((dir) => {
    switch (dir) {
      case 'PREVIOUS':
        const prevCard = CARD_DATA.find(c => c.id === (card.id > 1 ? card.id - 1 : 1))
        setCard(prevCard)
        setFront(true)
        setPost('')
        break;
        
        case 'NEXT':
          
          const nextCard = CARD_DATA.find(c => c.id === ((card.id < CARD_DATA.length - 1) ? card.id + 1 : CARD_DATA.length - 1))
          setCard(nextCard)
          setFront(true)
          setPost('')
      break;
      
      default:
        return
    }
  })
    
  return (
    <div>
      <div className={`flip-card ${card.level ?? ''}`} onClick={handleFlipCard}>
        <div className={`flip-card-inner ${isFront ? 'front' : ''}`} >
          <div className="flip-card-front"><p>{(card.question ?? '')}</p></div>
          <div className="flip-card-back">
              <img srcSet={card.img ?? ''} alt="answer" />
            <p>{(card.answer ?? '')}</p>
          </div>
        </div>
      </div>
      <div className='dir-btn'>
        <Button onHandleCard={() => handleSwitchCard('PREVIOUS')}>Previous</Button>
        <Button onHandleCard={() => handleSwitchCard('NEXT')}>Next</Button>
      </div>
      <PostForm
        handleSubmitForm={handleSubmitForm}
        card={card}
        post={post}
      ></PostForm>
    </div>
  );
};

export default CardView;