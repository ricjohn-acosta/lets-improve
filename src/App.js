import React from "react";
import "./App.css";

// React-router
import { Route, Switch, Redirect } from "react-router";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";
import VerifyEmail from "./components/VerifyEmail";

// Redux
import { connect } from "react-redux";


const App = ({ loggedIn, emailVerified, reloadUser}) => {
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verifyemail" component={VerifyEmail} />
        <Redirect to="/verifyemail" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/signup" />
      </Switch>
    );
  }

  return routes;
};

const mapStateToProps = ({ firebase }) => {
  return {
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified
  };
};

export default connect(mapStateToProps)(App);
