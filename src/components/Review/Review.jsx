// The Review Component - after all four components
// After collecting the 4 feedback parts, the app will allow the user to review their feedback.
// They should be able to see the values they added earlier.
// Users are not able to change their input on this step or go back for Base Mode.
// Submit the Feedback
// The Review step needs to have a submit button
// - which will be clicked on to actually submit the completed feedback to the server.
// When the submit button is clicked, save the submission in the database.

// followed by Success

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

// Review component
const Review = () => {
  const feedback = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    try {
      axios.post("/api/feedback", feedback);
      dispatch({ type: "CLEAR_FEEDBACK" });
      history.push("/success"); // Navigate to the Success component
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  history.push("../Success"); // Navigate to the next component

  return (
    <div>
      <h2>review your feedback</h2>
      <p>feeling: {feedback.feeling}</p>
      <p>understanding: {feedback.understanding}</p>
      <p>support: {feedback.support}</p>
      <p>comments: {feedback.comments}</p>
      <Button data-testid="next" variant="contained" onClick={handleSubmit}>
        restart
      </Button>{" "}
    </div>
  );
};

export default Review;

///
