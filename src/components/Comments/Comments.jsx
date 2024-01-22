// any comments you want to leave?
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
  const [comments, setComments] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { comments },
    });
    history.push('/review'); 
  };

  return (
    <div>
      <h2>any comments you want to leave?</h2>
      <textarea 
        value={comments}
        onChange={(event) => setComments(event.target.value)}
      />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Comments;
