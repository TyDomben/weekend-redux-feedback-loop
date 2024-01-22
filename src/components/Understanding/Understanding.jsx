// how well are you understanding the content? 
import React, { useState} from "react";
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
        type: "ADD_FEEDBACK",
        payload: { feeling: sliderValueUnderstanding },
      });
      history.push('/supported');
  };

  return (
    <div>
      <h2>how well are you understanding the content?</h2>
      <Box sx={{ width: 500, margin: "auto" }}>
      <Slider
        aria-label="Always visible"
        defaultValue={9}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        value={sliderValueUnderstanding}
        onChange={(event, newValue) => setsliderValueUnderstanding(newValue)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Next
      </Button>
    </Box>
    </div>
  );
}

export default Understanding;
