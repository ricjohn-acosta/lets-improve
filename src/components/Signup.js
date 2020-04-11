import React from "react";
import { signUp } from "../store/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// MATERIAL-UI COMPONENTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Signup = ({ signUp, signupError, isLoggedIn }) => {
  function handleSignup(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    console.log(userEmail);
    console.log(password);

    signUp(userEmail, password);
  }

  function errorHandler() {
    if (signupError !== null) {
      let errorData = {
        isWrong: true,
        passwordErrorMessage: signupError.search("Password") >= 0
          ? signupError
          : null,
        emailErrorMessage: signupError.search("email") >= 0
          ? signupError
          : null,
      };
      return signupError === null ? false : errorData;
    } else {
      return false;
    }
    // if(signupError === null) {
    //   return false
    // } else {
    //   return true
    // }
  }

  // function passwordErrorHandler() {
  //   if (signupError !== null) {
  //     return signupError.search("Password") >= 0 ? signupError : null;
  //   }
  // }

  // function emailErrorHandler() {
  //   if(signupError !== null) {
  //     return signupError.search("email") >= 0 ? signupError : null;
  //   }
  // }

  // function errorMessageUtil(errorMessage) {
  //   let errorData = {
  //     passwordErrorMessage:
  //   }
  //   if(errorMessage === null) {
  //     return null
  //   } else if (errorMessage.search("Password") >= 0) {
  //     return errorMessage;
  //   } else if (errorMessage.search("email") >= 0) {
  //     return errorMessage;
  //   }

  // }
  return (
    <>
      <form onSubmit={handleSignup}>
        <TextField
          error={errorHandler()}
          helperText={errorHandler().emailErrorMessage}
          fullWidth={true}
          type="email"
          name="email"
          label="Email"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <br />
        <TextField
          error={errorHandler()}
          helperText={errorHandler().passwordErrorMessage}
          fullWidth={true}
          type="password"
          name="password"
          label="Password"
          onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <br />
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button type="submit">Signup</Button>
          <Button>
            {isLoggedIn ? null : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            )}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    signupError: state.auth.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
