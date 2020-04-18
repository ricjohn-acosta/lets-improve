import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "5vh",
    marginBottom: "15vh",
  },

  rootSidebarOpen: {
    // marginTop: "5vh",
    // marginBottom: "10vh",
    // marginLeft: "15vw",
    // width: "80%"
  },
}));

const Room = ({ isOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        test
      </Paper>
    </>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    isOpen: views.drawer.isOpen,
  };
};

export default connect(mapStateToProps)(Room);
