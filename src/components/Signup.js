import React from "react";
import { signup } from "../store/actions/auth"
import { connect } from "react-redux";

class Signup extends React.Component {
  // handles user registration
  handleSignup = e => {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    console.log(userEmail);
    console.log(password);

    // Create user
    this.props.signIn(userEmail, password);
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
          {/* Username:
          <input
            type="text"
            name="username"
            onChange={e => console.log(e.target.value)}
          />
          <br /> */}
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(signup(email, password))
  };
}

export default connect(null, mapDispatchToProps)(Signup);
