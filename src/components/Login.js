import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/auth";

const Login = ({ signIn }) => {
  function handleLogin(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    console.log(userEmail);
    console.log(password);

    signIn(userEmail, password);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        Email:
        <input
          type="email"
          name="email"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        {/* Username:
          <input
            type="text"
            name="username"
            onChange={e => console.log(e.target.value)}
          />
          <br /> */}
        <button type="submit">Login</button>
      </form>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(logIn(email, password)),
  };
}
export default connect(null, mapDispatchToProps)(Login);
