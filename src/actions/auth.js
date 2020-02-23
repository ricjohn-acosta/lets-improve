// Import action types from actionTypes.js
import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNOUT_SUCCESS } from "./actionTypes";
import { fireConfig } from "../fire";
import { persistence } from "../fire";

// Create new user account
export function signup(email, password, username) {
  return dispatch => {
    // Create user
    fireConfig.auth().createUserWithEmailAndPassword(email, password)
      .then(data => {

        // Change persistence
        fireConfig.auth().setPersistence(persistence).then(() => {

          // Sign in user and change current user's display name
          return fireConfig.auth().signInWithEmailAndPassword(email, password)
          .then(data => {
            let currUser = fireConfig.auth().currentUser;
            currUser.updateProfile({ displayName: username });
            dispatch({
              type: SIGNUP_ERROR,
              authStatus: false,
              user: { user: null }
            });
          })

          // // Change auth state to logged in
          // .then(data => {
          //   fireConfig.auth().onAuthStateChanged(user => {
          //     if (user) {
          //       dispatch({
          //         type: SIGNUP_SUCCESS,
          //         authStatus: true,
          //         user
          //       });
          //     } else {
          //       dispatch({
          //         type: SIGNUP_ERROR,
          //         authStatus: false,
          //         user: { user: null}
          //       });
          //     }
          //   });
          // });
        })
      });
  };
}

export function signout() {
  return dispatch => {
    fireConfig
      .auth()
      .signOut()
      .then(data => {
        fireConfig.auth().onAuthStateChanged(user => {
          if (user === null) {
            dispatch({
              type: SIGNOUT_SUCCESS,
              authStatus: false,
              user: { user: null }
            });
          }
        });
      });
  };
}
