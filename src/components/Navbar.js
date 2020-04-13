import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL-UI COMPONENTS
import { Grid } from "@material-ui/core";
// COMPONENTS
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  navbarText: {
    padding: "10px",
  },

  loginForm: {
    float: "right",
  },
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position={"static"} color={"primary"}>
        <Grid className={classes.root} container direction="column">
          <Toolbar>
            <Grid item sm={8}>
              <Typography className={classes.navbarText} variant={"h2"}>
                Let's improve!
              </Typography>
            </Grid>

            <Grid item>
              <Login />
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </>
  );
};

export default Navbar;
