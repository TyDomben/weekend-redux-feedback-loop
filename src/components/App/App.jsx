import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button, Box, Slider } from "@mui/material";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./App.css";
import Understanding from "../Understanding/Understanding.jsx";
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";
import Review from "../Review/Review.jsx";
import Success from "../Success/Success.jsx";

// Feeling component
const Feeling = () => {
  const [sliderValueFeeling, setsliderValueFeeling] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: { feeling: sliderValueFeeling },
    });

    history.push("/understanding");
  };

  return (
    <Box sx={{ width: 500, margin: "auto" }}>
      <h1>how are you feeling today?</h1>
      <Slider
        aria-label="Always visible"
        defaultValue={9}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        value={sliderValueFeeling}
        onChange={(event, newValue) => setsliderValueFeeling(newValue)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Next
      </Button>
    </Box>
  );
};

const App = () => {
  const initialFetch = () => {
    axios
      .get("/api/feedback")
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TY's feedback form</h1>
          <h4>
            thank you so much for taking the time to try out my app, your feedback is appreciated
          </h4>
        </header>
        <Switch>
          <Route exact path="/" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/supported" component={Supported} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
