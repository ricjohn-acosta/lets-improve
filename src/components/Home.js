import React from "react";
import { Link } from "react-router-dom";

// STORE
import { connect } from "react-redux";
// COMPONENTS
import Signup from "../components/Signup";
import Logout from "../components/Logout";
// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL COMPONENTS
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "black"
  }
}));

const Home = ({ isLoggedIn }) => {
  const classes = useStyles();

  return (
    <>
      Home
      <Grid className={classes.root} container direction="column">
        <Grid item container>
          <Grid item xs={12} sm={8}>
         

          </Grid>

          <Grid item xs={12} sm={4}>
            {!isLoggedIn ? <Signup /> : <Logout />}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
