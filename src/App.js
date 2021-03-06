import React from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

// React-router
import { Route, Switch, Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";
import VerifyEmail from "./components/VerifyEmail";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Room from "./components/Room";
import UserRoom from "./components/UserRoom";
// Redux
import { connect } from "react-redux";

const App = ({ loggedIn, emailVerified }) => {
  let location = useLocation();
  let { owner } = useParams();
  let routes;

  // if logged in but email is not verified
  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Route component={Sidebar} />
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
        <Route component={Sidebar} />
        <Route
          render={() => (
            <Navbar currentRoute={location.pathname} isLoggedIn={loggedIn} />
          )}
        />
        <Switch>
          <Route exact path="/rooms" component={Room} />
          <Route exact path="/rooms/:owner">
            <UserRoom />
          </Route>
          <Redirect to="/rooms" />
        </Switch>
      </>
    );

    // if not logged in nor email verified
  } else if (!loggedIn) {
    routes = (
      <>
        <Route component={Sidebar} />
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
