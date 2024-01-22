// how well are you understanding the content?
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Box, Slider } from "@mui/material";
import { useDispatch } from "react-redux";

// Understanding component
const Understanding = () => {
  const [sliderValueUnderstanding, setsliderValueUnderstanding] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({
      type: "SET_UNDERSTANDING",
      payload: { Understanding: sliderValueUnderstanding },
    });
    history.push("/supported");
  };

  return (
    <div>
      <h2>how well are you understanding the content?</h2>
      <Box sx={{ width: 500, margin: "auto" }}>
        <Slider
          data-testid="input"
          aria-label="Always visible"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          value={sliderValueUnderstanding}
          onChange={(event) => setsliderValueUnderstanding(event.target.value)}
          />
        <Button data-testid="next" variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Understanding;
