// Import action types from actionTypes.js
import * as actions from "./actionTypes";

// TODO: CREATE SIGNUP ACTION
// Function that handles signup action - Returns an anonymous function
export function signUp(email, password) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: actions.AUTH_START });
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const currentUser = firebase.auth().currentUser;
        currentUser.sendEmailVerification().then(() => {
          console.log("VERIFICATION EMAIL SENT");
        });
        firestore
          .collection("users")
          .doc(res.user.uid)
          .set({ firstName: email, lastName: password })
          .then(() => {
            console.log("USER ADDED TO FIRESTORE");
          });
        dispatch({ type: actions.AUTH_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message });
      });
    dispatch({ type: actions.AUTH_END });
  };
}

export function signOut() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("USER SIGNED OUT");
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function verifyEmail() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: actions.VERIFY_EMAIL_START });
    firebase
      .auth()
      .currentUser()
      .then(user => {
        user.sendEmailVerification();
        dispatch({ type: actions.VERIFY_EMAIL_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actions.VERIFY_EMAIL_FAIL, payload: err.message });
      });
  };
}
