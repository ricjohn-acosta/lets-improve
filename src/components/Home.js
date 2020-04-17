import React from "react";
import { Link } from "react-router-dom";

// STORE
import { connect } from "react-redux";
// COMPONENTS
import Signup from "../components/Signup";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
// MATERIAL-UI STYLING
import { makeStyles } from "@material-ui/core/styles";
// MATERIAL COMPONENTS
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#2b2b2b",
  },
  
}));

const Home = ({ isLoggedIn }) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container direction="column">
        <Grid className={classes.root} item container>
          <Grid item xs={12} sm={7}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={5}>
            {!isLoggedIn ? <Signup /> : null}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};


export default connect()(Home);
