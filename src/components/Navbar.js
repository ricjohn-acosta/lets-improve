import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { showSidebar } from "../store/actions/views";
// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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

const Navbar = ({ currentRoute, isLoggedIn, showSidebar }) => {
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  const classes = useStyles();
  return (
    <>
      <AppBar position={"static"} color={"primary"}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => showSidebar(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Typography className={classes.navbarText} variant={"h2"}>
              Let's improve test!
            </Typography>
          </Grid>

          <Grid item>
            {currentRoute === "/login" || isLoggedIn ? <Logout /> : <Login />}
          </Grid>
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

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: (yesOrNo) => dispatch(showSidebar(yesOrNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
