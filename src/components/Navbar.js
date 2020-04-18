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

    [theme.breakpoints.down("375")]: {
      whiteSpace: "nowrap",
      fontSize: "1.5rem",
      marginLeft: "5vw",
    },
    [theme.breakpoints.between("375", "768")]: {
      whiteSpace: "nowrap",
      fontSize: "1.5rem",
      marginLeft: "9vw",
    },
    [theme.breakpoints.up("768")]: {
      whiteSpace: "nowrap",
      fontSize: "2rem",
      marginLeft: "25vw",
    },
    [theme.breakpoints.up("1024")]: {
      whiteSpace: "nowrap",
      fontSize: "2rem",
      marginLeft: "30vw",
    },
    [theme.breakpoints.up("lg")]: {
      whiteSpace: "nowrap",
      marginLeft: "5vw",
      fontSize: "3rem",
    },
    
  },

  loginForm: {
    float: "right",
  },
}));

const Navbar = ({ currentRoute, isLoggedIn, showSidebar, isOpen }) => {
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
          {isOpen ? <Grid item sm={2} /> : null}
          <Grid item sm={8}>
            <Typography className={classes.navbarText} variant={"h2"}>
              Let's improve test!
            </Typography>
          </Grid>

          <Grid item sm={5}>
            {currentRoute === "/login" || isLoggedIn ? <Logout /> : <Login />}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    isOpen: views.drawer.isOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: (yesOrNo) => dispatch(showSidebar(yesOrNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
