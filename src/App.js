import React from "react";
import "./App.css";

// React-router
import { Route, Switch, Redirect } from "react-router";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";

// Redux
import { connect } from "react-redux";

const App = ({ loggedIn }) => {
  let routes;

  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to = "/" />
      </Switch>
    );
  } else if (!loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Redirect to = "/signup" />
      </Switch>
    );
  }

  return (routes);
};

const mapStateToProps = ({ firebase }) => {
  return {
    loggedIn: firebase.auth.uid
  };
};

export default connect(mapStateToProps)(App);
