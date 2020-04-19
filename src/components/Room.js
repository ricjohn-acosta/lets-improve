import React from "react";
import { connect } from "react-redux";
import RoomContent from "./RoomContent";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#2b2b2b",
  },
}));

const Room = ({ isOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.root} container>
        <Grid item sm={2} />
        <Grid item container sm={8}>
          <RoomContent />
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    isOpen: views.drawer.isOpen,
  };
};

export default connect(mapStateToProps)(Room);
