// any comments you want to leave?
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";

// Comments component
const Comments = () => {
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
      <TextField
        data-testid="input"
        label="Comments"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
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
