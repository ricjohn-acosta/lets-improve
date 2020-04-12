import React from "react";
import { signUp } from "../store/actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px'
  },
}));

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
        passwordErrorMessage:
          signupError.search("Password") >= 0 ? signupError : null,
        emailErrorMessage:
          signupError.search("email") >= 0 ? signupError : null,
      };
      return signupError === null ? false : errorData;
    } else {
      return false;
    }
  }

  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} variant="outlined" elevation={3} square>
        <form className={classes.root} onSubmit={handleSignup}>
          <TextField
            error={errorHandler()}
            helperText={errorHandler().emailErrorMessage}
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
      </Paper>
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
