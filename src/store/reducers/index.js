// Root reducer
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./auth";
import viewReducer from "./views"
export default combineReducers({
  auth: authReducer,
  views: viewReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
