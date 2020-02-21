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
        {console.log(this.props.authStatus)}
        {this.props.authStatus ? <Home /> : <Signup />}
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.signinReducer.user,
    authStatus: state.signinReducer.authStatus
  };
};

export default connect(mapStateToProps, null)(App);
