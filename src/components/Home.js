import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import Signup from "../components/Signup";

const Home = ({ signout, isLoggedIn }) => {
  return (
    <>
      Home
      {!isLoggedIn ? <Signup /> : <button onClick={signout}>logout</button>}
     
    </>
  );
};

const mapDispatchToProps = {
  signout: actions.signOut
};
export default connect(null, mapDispatchToProps)(Home);
