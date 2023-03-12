import React, { useState, useCallback, useMemo } from 'react';
import './CardView.css';
import CARD_DATA from '../../../server/cards.js'
import Button from '../button/Button';
import PostForm from '../Form/PostForm';

const CardView = () => {
  const [card, setCard] = useState(CARD_DATA[0] ?? ''); 
  const [isFront, setFront] = useState(true);
  const [post, setPost] = useState();
  
  const checkCorrect = useMemo(() => {
    const rightAns = card.answer.toLowerCase().split(' ')
    const userAns = post?.answer?.toLowerCase().replace(/[.,]/g, "")
    if (!userAns) return !!userAns

    return rightAns[rightAns.length - 1].includes(userAns)
  }, [post, card])
  
  const handleSubmitForm = useCallback((data) => {
    setPost(data)
  }, [])
  console.log([post]);

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
      <PostForm
        handleSubmitForm={handleSubmitForm}
        card={card}
        checkCorrect={checkCorrect}
      ></PostForm>
      <div className='dir-btn'>
        <Button onHandleCard={() => handleSwitchCard('PREVIOUS')}>Previous</Button>
        <Button onHandleCard={() => handleSwitchCard('NEXT')}>Next</Button>
      </div>
      <div className={`ans-checker ${post ? checkCorrect : 'init'}`}>
        {`Your answer is ${checkCorrect ? 'correct' : 'incorrect, please try again'}`}
      </div>
    </div>
  );
};

export default CardView;