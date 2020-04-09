import React from "react";
import { Link } from "react-router-dom";

// STORE
import { connect } from "react-redux";

// COMPONENTS
import Signup from "../components/Signup";
import Logout from "../components/Logout";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      Home
      {!isLoggedIn ? <Signup /> : <Logout />}
    </>
  );
};

export default Home;
