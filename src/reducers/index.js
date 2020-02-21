// Root reducer
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import signinReducer from "./auth";

export default combineReducers({
  firebaseReducer,
  signinReducer
});
