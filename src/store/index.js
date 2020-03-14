// SETUP REDUX SSTORE
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

// ENHANCE STORE WITH FIREBASE
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { firebase } from "./fire";

// /*WORKING SOLUTION*/
// // CREATE STORE
// const createStoreWithFirebase = compose(reactReduxFirebase(fireConfig))(
//   createStore
// );
// const store = createStoreWithFirebase(
//   reducers,
//   {},
//   applyMiddleware(reduxThunk)
// );

/**
 * REFACTOR ATTEMPT #1
 *
 * -- ENHANCERS --
 * MIDDLEWARES: REDUX-THUNK
 * STORE ENHANCER: REACT-REDUX-FIREBASE
 * REDUX DEV TOOL
 **/

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

// Middlewares
const middlewareEnhancer = applyMiddleware(
  reduxThunk.withExtraArgument({ getFirebase, getFirestore })
);

// Store enhancers
const rrfEnhancer = reactReduxFirebase(firebase, rrfConfig);
const reduxFirestoreEnhancer = reduxFirestore(firebase);

// Redux dev tools
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

// Compose all enhancers.
const composedEnhancers = compose(
  middlewareEnhancer,
  rrfEnhancer,
  reduxFirestoreEnhancer,
  reduxDevTool
);

// Finally, create store.
const store = createStore(reducers, composedEnhancers);

export default store;
