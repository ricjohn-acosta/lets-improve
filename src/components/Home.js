import React from "react";
import { Link } from "react-router-dom";

// STORE
import { connect } from "react-redux";
// COMPONENTS
import Signup from "../components/Signup";
import Logout from "../components/Logout";
// MATERIAL COMPONENTS
import { Grid } from "@material-ui/core";

const Home = ({ isLoggedIn }) => {
  return (
    <>
      Home
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={9}>
            BACKGROUND
          </Grid>

          <Grid item xs={3}>
            {!isLoggedIn ? <Signup /> : <Logout />}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
