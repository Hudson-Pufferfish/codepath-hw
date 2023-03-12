import './PostForm.css';
import { useRef, useState } from 'react';

const PostForm = ({ handleSubmitForm }) => {
  const [postForm, setPostForm] = useState({});
  const handleChange = useRef();
  const handleSubmit = useRef();
  
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
          className='answer-input' 
          placeholder='Type your answer here...' 
          onChange={handleChange.current}
        />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </>
  );
};

export default PostForm;