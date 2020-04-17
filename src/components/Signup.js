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
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    [theme.breakpoints.up("xs")]: {
      margin: "5px",
      marginTop: "-50vw",
    },

    [theme.breakpoints.between("sm", "xl")]: {
      marginTop: "10vw",
      marginRight: "5vw",
      marginLeft: "2.5vw",
      backgroundColor: "#EAEAEA",
    },

    [theme.breakpoints.up("3000")]: {
      marginTop: "5vw",
      marginRight: "5vw",
      marginLeft: "2.5vw",
      backgroundColor: "#EAEAEA",
    },
  },
  form: {
    padding: "30px",
  },
  formTitle: {
    paddingLeft: "20px",
    paddingTop: "20px",
  },
  formSubtitle: {
    paddingLeft: "25px",
  },
  signupPage: {
    [theme.breakpoints.up("xs")]: {
      margin: "5px",
      marginTop: "10vw",
    },
  },
}));

const Signup = ({
  signUp,
  signupClicked,
  signupError,
  currentRoute,
  isLoggedIn,
}) => {
  function handleSignup(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let username = e.target[1].value;
    let password = e.target[2].value;
    console.log("email", userEmail);
    console.log("username", username);
    console.log("password", password);

    signUp(userEmail, username, password);
  }

  function errorHandler() {
    if (signupError !== null && signupError !== false && signupClicked) {
      let errorData = {
        passwordIsWrong: signupError.search("Password") >= 0 ? true : null,
        passwordErrorMessage:
          signupError.search("Password") >= 0 ? signupError : null,

        emailIsWrong: signupError.search("email") >= 0 ? true : null,
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
      <Paper
        className={
          currentRoute === "/signup"
            ? classes.signupPage
            : classes.formContainer
        }
        variant="outlined"
        elevation={3}
      >
        <div>
          <Typography className={classes.formTitle} variant={"h3"}>
            Sign up!
          </Typography>
          <Typography className={classes.formSubtitle} variant={"h5"}>
            It's free ;)
          </Typography>
        </div>

        <form className={classes.form} onSubmit={handleSignup}>
          <TextField
            error={errorHandler().emailIsWrong}
            helperText={errorHandler().emailErrorMessage}
            fullWidth
            type="email"
            name="email"
            label="Email"
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <br />
          <TextField
            error={errorHandler().passwordIsWrong}
            helperText={errorHandler().passwordErrorMessage}
            fullWidth
            type="username"
            name="username"
            label="Username"
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <br />
          <TextField
            error={errorHandler().passwordIsWrong}
            helperText={errorHandler().passwordErrorMessage}
            fullWidth
            type="password"
            name="password"
            label="Password"
            onChange={(e) => console.log(e.target.value)}
          />
          <br />
          <br />
          <ButtonGroup
            style={{ minWidth: "30px" }}
            size="large"
            color="primary"
            aria-label="large outlined primary button group"
          >
            <Button type="submit">Create account</Button>
          </ButtonGroup>
        </form>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    signupError: state.auth.error,
    signupClicked: state.auth.signin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, username, password) => dispatch(signUp(email, username,password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
