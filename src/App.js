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
  // TODO: PUT USER IN GLOBAL STATE
  // state = {
  //   user: {}
  // }

  // componentDidMount = () => {
  //   this.authListener()
  // }

  // // HANDLE SET STATES IN REDUCER
  // authListener = () => {
  //   fire.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({user})
  //     } else {
  //       this.setState({user:null})
  //     }
  //   })

  //   this.props.dispatch(authUser())
  // }

  render() {
    return (
      // I want this to be
      <>
        {this.props.user ? <Home /> : <Signup />}
        <Route path="/signup" component={Signup} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authStatus
  };
}

export default connect(mapStateToProps)(App);
