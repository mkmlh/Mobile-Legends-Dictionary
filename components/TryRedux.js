import { createStore, applyMiddleware } from "redux";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import axios from "axios";

const initialState = {
  fetching: false,
  fetched: false,
  error: false,
  heroes: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO_PENDING":
      return { ...state, fetching: true };
      break;

    case "FETCH_HERO_FAILED":
      return { ...state, error: true };
      break;

    case "FETCH_HERO_FULFILLED":
      return { ...state, fetched: true, heroes: action.payload };
      break;
      default:
  }
  return state;
};

const middleware = applyMiddleware(logger, thunk, promise());
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("state changed", store.getState());
});

store.dispatch({
    type:"FETCH_HERO",
    payload: axios.get("http://rest.learncode.academy/api/kamal/heroes")
});
