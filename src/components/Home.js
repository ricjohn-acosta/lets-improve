import React from "react";
import { Link, Route } from "react-router-dom";
import fire from "../fire";
import Signup from "./Signup";

// REDUX
import { connect } from "react-redux";
import { signout } from "../actions/auth";

class Home extends React.Component {
  // const logout = () => {
  //   fire.auth().signOut()
  // }

  // const displayUser = () => {
  //   let user = fire.auth().currentUser
  //   if (user != null) {
  //     return user.displayName
  //   }
  // }

  logoutHandler = () => {
    this.props.signoutUser();
  };

  render() {
    return (
      <div>
        <li>
          {console.log(this.props.user.displayName)}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <button onClick={this.logoutHandler}>logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.authReducer.user
  };
};

function mapDispatchToProps(dispatch) {
  return {
    signoutUser: () => dispatch(signout())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
