import React from "react";
import "./App.css";
import { firebase } from "./fire";

// React-router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Signup from "./components/Signup";

// Redux
import { connect } from "react-redux";

class App extends React.Component {
  // state = {
  //   currentUser: {}
  // };

  // componentDidMount = () => {
  //   fireConfig.auth().onAuthStateChanged(currentUser => {
  //     console.log(currentUser)
  //     if (currentUser) {
  //       this.setState({ currentUser });
  //     } else {
  //       this.setState({ currentUser: null });
  //     }
  //   });
  // };
  
  render() {
    return (
      <>
        {/* {console.log(this.props.user)} */}
        {/* {this.state.currentUser ? <Home /> : <Signup />} */}
        <Home />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.authReducer.user,
    authStatus: state.authReducer.authStatus
  };
};

export default connect(mapStateToProps, null)(App);
