import './PostForm.css';
import { useEffect, useMemo, useRef, useState } from 'react';

const PostForm = ({ handleSubmitForm, card, post }) => {
  const [postForm, setPostForm] = useState({ answer: '' });
  const [streak, setStreak] = useState(0);
  const handleChange = useRef();
  const handleSubmit = useRef();
    
  useEffect(() => {
    setPostForm(prevPostForm => ({
      ...prevPostForm, 
      answer: '',
    }))
  }, [card])

  const checkCorrect = useMemo(() => {
    const rightAns = card.answer.toLowerCase().split(' ')
    const userAns = post?.answer?.toLowerCase().replace(/[.,]/g, "")
    if (!userAns) return !!userAns

    return rightAns[rightAns.length - 1].includes(userAns)
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
        <div className='user-streak'>{`Your current streak: ${streak}`}</div>
      </form>
      <div className={`ans-checker ${post ? checkCorrect : 'init'}`}>
        {`Your answer is ${checkCorrect ? 'correct' : 'incorrect, please try again'}`}
      </div>
    </>
  );
};

export default PostForm;