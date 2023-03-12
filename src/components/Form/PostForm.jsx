import './PostForm.css';
import { useEffect, useRef, useState } from 'react';

const PostForm = ({ handleSubmitForm, card, checkCorrect }) => {
  const [postForm, setPostForm] = useState({ answer: '', streak: 0 });

    console.log("🚀 ------------------------------------------🚀")
    console.log("🚀 ~ PostForm ~ checkCorrect:", checkCorrect)
    console.log("🚀 ------------------------------------------🚀")

  const handleChange = useRef();
  const handleSubmit = useRef();

  useEffect(() => {
    setPostForm(prevPostForm => ({
      ...prevPostForm, 
      answer: '',
    }))
  }, [card])
  
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
        <div className='user-streak'>{`Your current streak: ${postForm.streak}`}</div>
      </form>
    </>
  );
};

export default PostForm;