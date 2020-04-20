// Root reducer
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./auth";
import viewReducer from "./views"
import roomsReducer from "./rooms"
export default combineReducers({
  auth: authReducer,
  views: viewReducer,
  rooms: roomsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
