import './PostForm.css';
import { useEffect, useRef, useState } from 'react';

const PostForm = ({ handleSubmitForm, card, post }) => {
  const [postForm, setPostForm] = useState({ answer: '' });
  const [isCorrect, setIsCorrect] = useState(false);
  const handleChange = useRef();
  const handleSubmit = useRef();
  const { current: streakRef } = useRef({ curStreak: 0, highestStreak: 0})
    
  useEffect(() => {
    setPostForm(prevPostForm => ({
      ...prevPostForm, 
      answer: '',
    }))
    const rightAns = card.answer.toLowerCase().split(' ')
    const userAns = post?.answer?.toLowerCase().replace(/[.,]/g, "")
    if (!userAns) {
      setIsCorrect(!!userAns)
    } else {
      const checkCorrect = rightAns[rightAns.length - 1].includes(userAns)
      setIsCorrect(checkCorrect)
    }
  }, [post, card])
      
  handleChange.current = (e) => {
    const key = e.target.name;
    setPostForm(prevPostForm => ({
      ...prevPostForm, 
      [key]: e.target.value,
    }))

  }
  
  handleSubmit.current = (e) => {
    e.preventDefault();
    const rightAns = card.answer.toLowerCase().split(' ')
    const userAns = postForm?.answer?.toLowerCase().replace(/[.,]/g, "")
    const isCorrect = rightAns[rightAns.length - 1].includes(userAns)
    if (isCorrect && !!userAns) {
      streakRef.curStreak += 1;
      streakRef.highestStreak += streakRef.curStreak > streakRef.highestStreak ? 1 : 0;
    } else {
      streakRef.curStreak = 0;
    }
    handleSubmitForm(postForm);
  }

  return (
    <>
      <form className="answer-form" onSubmit={handleSubmit.current}>
        <label htmlFor="answer">Your Answer: </label>
        <input
          name="answer"
          type="text"
          id="answer"
          value={postForm.answer}
          className='answer-input' 
          placeholder='Type your answer here...' 
          onChange={handleChange.current}
        />
        <input type="submit" value="Submit" className="submit-btn" />
        <div className='streak-container'>
          <div className="current-streak">{`Your current streak: ${streakRef.curStreak}`}</div>
          <div className="highest-streak">{`Your highest streak: ${streakRef.highestStreak}`}</div>
        </div>
      </form>
      <div className={`ans-checker ${post ? isCorrect : 'init'}`}>
        {`Your answer is ${isCorrect ? 'correct' : 'incorrect, please try again'}`}
      </div>
    </>
  );
};

export default PostForm;