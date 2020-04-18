import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/auth";

// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: "transparent",
    "& label.Mui-focused": {
      color: "#EAEAEA",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#EAEAEA",
      },
      "&:hover fieldset": {
        borderColor: "#EAEAEA",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EAEAEA",
      },
    },
    "&::-webkit-input-placeholder": { color: "#EAEAEA" },
    "&::-webkit-input": { color: "white" },
  },
  textfieldInput: {
    color: "#EAEAEA",
  },
  textfieldInputPage: {
    color: "black",
  },
  form: {
    padding: "30px"
  },
  paper: {
    background: "transparent",
  },
  paperPage: {
    marginTop: "10vw",
  },
  formTitle: {
    paddingLeft: "20px",
    paddingTop: "20px",
  },
  formSubtitle: {
    paddingLeft: "25px",
  },
}));

const Login = ({ signIn, currentRoute }) => {
  function handleLogin(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    let passwordNavbar = e.target[2].value;
    console.log(e.target);
    console.log(userEmail);
    console.log(password);

    if (currentRoute === "/login") {
      signIn(userEmail, password)
    } else {
      signIn(userEmail, passwordNavbar)
    }
  }

  const classes = useStyles();
  return (
    <>
      <Hidden lgDown={currentRoute === "/login" ? false : true}>
        <Paper
          className={
            currentRoute === "/login" ? classes.paperPage : classes.paper
          }
          variant={currentRoute === "/login" ? "outlined" : null}
          elevation={currentRoute === "/login" ? "3" : "0"}
        >
          {currentRoute === "/login" ? (
            <div>
              <Typography className={classes.formTitle} variant={"h3"}>
                Log in
              </Typography>
            </div>
          ) : null}

          <form
            className={currentRoute === "/login" ? classes.form : null}
            onSubmit={handleLogin}
          >
            <TextField
              className={currentRoute === "/login" ? null : classes.input}
              // error={errorHandler().emailIsWrong}
              // helperText={errorHandler().emailErrorMessage}
              type="email"
              name="email"
              label="Email"
              variant={currentRoute === "/login" ? "standard" : "outlined"}
              size={"small"}
              fullWidth={currentRoute === "/login" ? true : false}
              InputProps={
                currentRoute === "/login"
                  ? null
                  : { className: classes.textfieldInput }
              }
              InputLabelProps={
                currentRoute === "/login"
                  ? null
                  : { className: classes.textfieldInput }
              }
              onChange={(e) => console.log(e.target.value)}
            />

            {currentRoute === "/login" ? <></> : <span>&nbsp;</span>}
            <TextField
              className={currentRoute === "/login" ? null : classes.input}
              // error={errorHandler().passwordIsWrong}
              // helperText={errorHandler().passwordErrorMessage}
              type="password"
              name="password"
              label="Password"
              variant={currentRoute === "/login" ? "standard" : "outlined"}
              size={"small"}
              fullWidth={currentRoute === "/login" ? true : false}
              InputProps={
                currentRoute === "/login"
                  ? null
                  : { className: classes.textfieldInput }
              }
              InputLabelProps={
                currentRoute === "/login"
                  ? null
                  : { className: classes.textfieldInput }
              }
              onChange={(e) => console.log(e.target.value)}
            />
            {currentRoute === "/login" ? (
              <div>
                <br></br>
              </div>
            ) : (
              <span>&nbsp;</span>
            )}
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Hidden>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    signIn: (email, password) => dispatch(logIn(email, password)),
  };
}
export default connect(null, mapDispatchToProps)(Login);
