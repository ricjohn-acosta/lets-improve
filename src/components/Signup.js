import React from "react";
import { signUp } from "../store/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Signup = ({ signUp, isLoggedIn }) => {
  function handleSignup(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    console.log(userEmail);
    console.log(password);

    signUp(userEmail, password);
  }
  return (
    <>
      <form onSubmit={handleSignup}>
        Email:
        <input
          type="email"
          name="email"
          onChange={e => console.log(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          onChange={e => console.log(e.target.value)}
        />
        <br />
        {/* Username:
          <input
            type="text"
            name="username"
            onChange={e => console.log(e.target.value)}
          />
          <br /> */}
        <button type="submit">Signup</button>
      </form>

      {isLoggedIn ? null : <Link to="/login">Login</Link>}
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    signUp: (email, password) => dispatch(signUp(email, password))
  };
}

export default connect(null, mapDispatchToProps)(Signup);
