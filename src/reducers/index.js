// Root reducer
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";

export default combineReducers({
  firebaseReducer,
  authReducer
});
