// SETUP REDUX SSTORE
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

// ENHANCE STORE WITH FIREBASE
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import firebase from "../fire";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Finally, create store.
const store = createStore(
  rootReducer,
  composeEnhancers(
    middlewareEnhancer, rrfEnhancer, reduxFirestoreEnhancer
  )
);

export default store;
