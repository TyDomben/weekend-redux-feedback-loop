// we need to import npm install @mui/material @emotion/react @emotion/styled for this to work
// import { Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// imports at the top - useEffect, useState, axios, React
// In the App.js we'll create a link and route for our search to Feeling.jsx

const App = () => {
  // const VARIABLENAME = useSelector((store) => store.VARIABLEVARIABLEVARIABLE);
  // const dispatch = useDispatch();
  const initialFetch = () => {
    // GET request to /api/feedback
    axios
      .get("/api/feedback")
      .then((res) => {
        dispatch({
          type: "SET_FEEDBACK",
          payload: res.data,
        });
      })
      // catch any errors
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("This is a consoleLOG inside useEffect");
    initialFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>
          hey - thank you so much for taking the try out my app -
          what you provide here is both meaningful and appreciated.
        </h4>
      </header>
    </div>
  );
};

export default App;
