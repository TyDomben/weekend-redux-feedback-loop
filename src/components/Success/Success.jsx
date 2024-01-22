// The user then should see a submission success page.
// They can then click the button to take a new survey,
// which needs to reset all the data and go back to the very first step to do it all over again.
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "RESET_FEEDBACK", // Reset the feedback state
    });
    history.push("/"); // Navigate back to the start - the Feeling component of the survey
  };

  return (
    <div>
      <h1>success!</h1>
      <p>thank you for your feedback!</p>
      <button onClick={handleClick}>Start Over</button>
    </div>
  );
}

export default Success;
