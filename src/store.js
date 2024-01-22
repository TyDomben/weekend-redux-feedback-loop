import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// Reducer for managing feedback
const feedback = (state = {}, action) => {
  switch (action.type) {
    case "SET_FEELING":
      return { ...state, feeling: action.payload };
    case "SET_UNDERSTANDING":
      return { ...state, understanding: action.payload };
    case "SET_SUPPORT":
      return { ...state, support: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    case "RESET_FEEDBACK":
      return {}; // Reset to initial state
    default:
      return state;
  }
};

// combine reducers
const rootReducer = combineReducers({
  feedback,
});

// Create the store
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
