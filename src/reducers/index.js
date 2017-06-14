import {combineReducers} from "redux";
import {BOOKS_LOADED} from "../actions";

function books(state = [], action) {
  if (action.type === BOOKS_LOADED) {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  books
});

export default rootReducer;
