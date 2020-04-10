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
// Material-ui
import { Grid } from "@material-ui/core";

const App = ({ loggedIn, emailVerified }) => {
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
        <Grid container direction="column">
          <Grid item xs={12}>
            <Route component={Navbar} />
          </Grid>

          <Grid item container>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Home isLoggedIn={loggedIn} />}
              />
              {/* <Grid item xs={5}>
                <Route
                  exact
                  path="/signup"
                  render={() => <Signup isLoggedIn={loggedIn} />}
                />
              </Grid>

              <Route exact path="/login" component={Login} /> */}
              <Redirect to="/" />
            </Switch>
          </Grid>
        </Grid>
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
