// Import action types from actionTypes.js
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actionTypes";
import fire from "../fire";

// Signup with firebase api
export function signup(email, password) {
  return dispatch => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: true
            });
          }
        });
      });
  };
}