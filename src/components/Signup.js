import React from "react";
import { signup } from "../actions/auth";
import { connect } from "react-redux";

class Signup extends React.Component {
  // handles user registration
  handleSignup = e => {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    let username = e.target[2].value;
    console.log(userEmail);
    console.log(password);
    console.log(username);

    // Create user
    this.props.registerUser(userEmail, password, username);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSignup}>
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
          Username:
          <input
            type="text"
            name="username"
            onChange={e => console.log(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: (email, password, username) => dispatch(signup(email, password, username))
  };
}

export default connect(null, mapDispatchToProps)(Signup);
