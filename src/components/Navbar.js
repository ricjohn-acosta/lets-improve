import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import { Grid } from "@material-ui/core";
// COMPONENTS
import Login from "./Login";
import Logout from "./Logout";

const useStyles = makeStyles((theme) => ({
  navbarText: {
    padding: "5px",
  },

  loginForm: {
    float: "right",
  },
}));
const Navbar = ({ currentRoute, isLoggedIn}) => {

  const classes = useStyles();
  return (
    <>
      <AppBar position={"static"} color={"primary"}>
          <Toolbar>
            <Grid item sm={8}>
              <Typography className={classes.navbarText} variant={"h2"}>
                Let's improve test!
              </Typography>
            </Grid>

            <Grid item>{currentRoute === "/login" || isLoggedIn ? <Logout /> : <Login />}</Grid>
          </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = ({ firebase }) => {
  return {
    isLoggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified,
  };
};

export default connect(mapStateToProps)(Navbar);
