import {combineReducers} from "redux";
import {BOOKS_LOADED} from "../actions";

function books(state = [], action) {
  switch (action.type) {
    case BOOKS_LOADED:
      return action.value;
    default:
      return state;
  }
}

export const reducers = combineReducers({
  books
});
