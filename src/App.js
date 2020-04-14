import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

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
  let location = useLocation();
  let routes;

  // if logged in but email is not verified
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

    // if logged in and email is verified
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

    // if not logged in nor email verified
  } else {
    routes = (
      <>
        <Route render={() => <Navbar currentRoute={location.pathname} />} />
        <Switch>
          <Route exact path="/" render={() => <Home isLoggedIn={loggedIn} />} />
          <Route
            exact
            path="/login"
            render={() => <Login currentRoute={location.pathname} />}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <Signup currentRoute={location.pathname} isLoggedIn={loggedIn} />
            )}
          />
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
