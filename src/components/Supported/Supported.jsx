// How well are you being supported? thid component followed by Comments
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Box, Slider } from "@mui/material";
import { useDispatch } from "react-redux";
// Supported component
const Supported = () => {
  const [sliderValueSupported, setsliderValueSupported] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { feeling: sliderValueSupported },
    });
    history.push("/comments");
  };

  return (
    <div>
      <h2>how well are you being supported?</h2>
      <Box sx={{ width: 500, margin: "auto" }}>
        <Slider
          aria-label="Always visible"
          defaultValue={9}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
          value={sliderValueSupported}
          onChange={(event, newValue) => setsliderValueSupported(newValue)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default Supported;
