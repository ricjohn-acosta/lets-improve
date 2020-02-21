import React from "react";
import logo from "./logo.svg";
import "./App.css";
import fire from "./fire";

// React-router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";

// Redux
import { connect } from "react-redux";

class App extends React.Component {

  render() {
    return (
      <>
        {this.props.authenticated ? <Home /> : <Signup />}
        <Route path="/signup" component={Signup} />
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    user: state.user,
    authenticated: state.authenticated
  };
}

export default connect(mapStateToProps)(App);
