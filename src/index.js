import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

// SETUP REDUX SSTORE
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

// ENHANCE STORE WITH FIREBASE
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import fire from "./fire";

// CREATE STORE
// const createStoreWithFirebase = compose(reactReduxFirebase(fire))(createStore);
// const store = createStoreWithFirebase(reducers,{},applyMiddleware(reduxThunk));

const rrfConfig = { userProfile: "users" };
const store = createStore(
  reducers,
  {authStatus: false},
  applyMiddleware([reduxThunk.withExtraArgument(getFirebase)])
);
const rrfProps = {
  fire,
  config: rrfConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
