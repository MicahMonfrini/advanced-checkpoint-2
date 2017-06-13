import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const initialState = {
  books: []
};

export const initStore = () => {
  return createStore(initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
