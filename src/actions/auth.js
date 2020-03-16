// Import action types from actionTypes.js
import * as actions from "./actionTypes";

// TODO: CREATE SIGNUP ACTION
// Function that handles signup action - Returns an anonymous function
export function signup(email, password) {
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
            console.log("USER ADDED TO FIRESTORE")
          })
        dispatch({ type: actions.AUTH_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message });
      });
    dispatch({ type: actions.AUTH_END });
  };
}

// WORKING SOLUTION
// // Create new user account
// export function signup(email, password, username) {
//   return dispatch => {
//     // Create user
//     fireConfig.auth().createUserWithEmailAndPassword(email, password)
//       .then(data => {

//         // Change persistence
//         fireConfig.auth().setPersistence(persistence).then(() => {

//           // Sign in user and change current user's display name
//           return fireConfig.auth().signInWithEmailAndPassword(email, password)
//           .then(data => {
//             let currUser = fireConfig.auth().currentUser;
//             currUser.updateProfile({ displayName: username });
//             dispatch({
//               type: SIGNUP_ERROR,
//               authStatus: false,
//               user: { user: null }
//             });
//           })

//           // // Change auth state to logged in
//           // .then(data => {
//           //   fireConfig.auth().onAuthStateChanged(user => {
//           //     if (user) {
//           //       dispatch({
//           //         type: SIGNUP_SUCCESS,
//           //         authStatus: true,
//           //         user
//           //       });
//           //     } else {
//           //       dispatch({
//           //         type: SIGNUP_ERROR,
//           //         authStatus: false,
//           //         user: { user: null}
//           //       });
//           //     }
//           //   });
//           // });
//         })
//       });
//   };
// }

// export function signout() {
//   return dispatch => {
//     fireConfig
//       .auth()
//       .signOut()
//       .then(data => {
//         fireConfig.auth().onAuthStateChanged(user => {
//           if (user === null) {
//             dispatch({
//               type: SIGNOUT_SUCCESS,
//               authStatus: false,
//               user: { user: null }
//             });
//           }
//         });
//       });
//   };
// }
