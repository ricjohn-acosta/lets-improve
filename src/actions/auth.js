// Import action types from actionTypes.js
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actionTypes";
import fire from "../fire";

// Signup with firebase api
export function signup(email, password, username) {
  return dispatch => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        fire.auth().signInWithEmailAndPassword(email, password);
      })
      .then(data => {
        let currUser = fire.auth().currentUser;
        currUser.updateProfile({ displayName: username });
      })
      .then(data => {
        fire.auth().onAuthStateChanged(user => {
          if (user !== null) {
            dispatch({
              type: SIGNUP_SUCCESS,
              // payload: true
              authStatus: true,
              user: user
            });
          }
        });
      });
  };
}
