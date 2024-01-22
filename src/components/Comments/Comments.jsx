// any comments you want to leave?
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

// Comments component
function Comments() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { comments },
    });
    history.push("/review");
  };

  return (
    <div>
      <h2>any comments you want to leave?</h2>
      <textarea
        value={comments}
        onChange={(event) => setComments(event.target.value)}
      />
      <Button data-testid="next" variant="contained" onClick={handleSubmit}>
        Next
      </Button>{" "}
    </div>
  );
}

export default Comments;
