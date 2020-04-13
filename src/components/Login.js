import React from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions/auth";

// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  },
  textfieldInput: {
    color: "#EAEAEA",
  },
}));

const Login = ({ signIn }) => {

  function handleLogin(e) {
    e.preventDefault();
    let userEmail = e.target[0].value;
    let password = e.target[1].value;
    console.log(e.target)
    console.log(userEmail);
    console.log(password);

    signIn(userEmail, password);
  }

  const classes = useStyles();
  return (
    <>
      <form onSubmit={handleLogin}>
        <TextField
          className={classes.input}
          // error={errorHandler().emailIsWrong}
          // helperText={errorHandler().emailErrorMessage}
          type="email"
          name="email"
          label="Email"
          variant={"outlined"}
          size={"small"}
          // InputProps={{ className: classes.textfieldInput }}
          // InputLabelProps={{ className: classes.textfieldInput }}
          onChange={(e) => console.log(e.target.value)}
        />
        
        <TextField
          className={classes.input}
          // error={errorHandler().passwordIsWrong}
          // helperText={errorHandler().passwordErrorMessage}
          type="password"
          name="password"
          label="Password"
          variant={"outlined"}
          size={"small"}
          // InputProps={{ className: classes.textfieldInput }}
          // InputLabelProps={{ className: classes.textfieldInput }}
          onChange={(e) => console.log(e.target.value)}
        />
        <Button type="submit">Login</Button>
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
