// Root reducer
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import test from "./auth";

export default combineReducers({
  firebaseReducer,
  test
});
