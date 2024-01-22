// The user then should see a submission success page.
// They can then click the button to take a new survey,
// which needs to reset all the data and go back to the very first step to do it all over again.
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Success() {
  const [feedback, setFeedback] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "RESET",
    });
    history.push("/");
  };
  return (
    <div>
      <h1>Success!</h1>
      <p>Thank you for your feedback!</p>
      <button onClick={handleClick}>Leave New Feedback</button>
    </div>
  );
}
export default Success;
