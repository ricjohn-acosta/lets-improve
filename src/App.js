import React from "react";
import "./App.css";

// React-router
import { Route, Switch, Redirect } from "react-router";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";
import VerifyEmail from "./components/VerifyEmail";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

// Redux
import { connect } from "react-redux";

const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/verifyemail" component={VerifyEmail} />
          <Redirect to="/verifyemail" />
        </Switch>
      </>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <Home isLoggedIn={loggedIn} />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  } else {
    routes = (
      <>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <Home isLoggedIn={loggedIn} />} />
          <Route
            exact
            path="/signup"
            render={() => <Signup isLoggedIn={loggedIn} />}
          />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }

  return routes;
};

const mapStateToProps = ({ firebase }) => {
  return {
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified,
  };
};

export default connect(mapStateToProps)(App);
