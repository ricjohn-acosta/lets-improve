// SETUP REDUX SSTORE
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

// ENHANCE STORE WITH FIREBASE
import { reactReduxFirebase } from "react-redux-firebase";
import { fireConfig } from "./fire";

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

// Middlewares
const middlewareEnhancer = applyMiddleware(reduxThunk.withExtraArgument{getFirebase,});
// Store enhancers
const storeEnhancer = reactReduxFirebase(fireConfig);
// Redux dev tools
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__

// Compose all enhancers.
const composedEnhancers = compose(middlewareEnhancer, storeEnhancer, reduxDevTool);

// Finally, create store.
const store = createStore(reducers);

export default store;
