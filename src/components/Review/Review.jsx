// The Review Component - after all four components
// After collecting the 4 feedback parts, the app will allow the user to review their feedback. 
// They should be able to see the values they added earlier. 
// Users are not able to change their input on this step or go back for Base Mode.
// Submit the Feedback
// The Review step needs to have a submit button 
// - which will be clicked on to actually submit the completed feedback to the server.
// When the submit button is clicked, save the submission in the database.

// followed by Success

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Review = () => {
    const feedback = useSelector(state => state.feedback); // Replace 'state.feedback' with the correct path to your feedback state
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async () => {
        try {
          await axios.post('/api/feedback', feedback); // Replace with your API endpoint
          dispatch({ type: "CLEAR_FEEDBACK" }); // Clear feedback from Redux store (if necessary)
          history.push('/success'); // Navigate to the Success component
        } catch (error) {
          console.error('Error submitting feedback:', error);
        }
      };
    history.push('../Success'); // Navigate to the next component

return (
    <div>
      <h2>Review Your Feedback</h2>
      <p>Feeling: {feedback.feeling}</p>
      <p>Understanding: {feedback.understanding}</p>
      <p>Support: {feedback.support}</p>
      <p>Comments: {feedback.comments}</p>
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );

};

export default Review;


///




  

  