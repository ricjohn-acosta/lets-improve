import React from "react";
import { Link } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import * as actions from "../actions/auth";

const Home = ({ signout }) => {


  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <button onClick={signout}>logout</button>
    </div>
  );
};

const mapDispatchToProps = {
  signout: actions.signOut
};
export default connect(null, mapDispatchToProps)(Home);
