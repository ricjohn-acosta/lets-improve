import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  rootPaper: {
    width: "100%",
    marginTop: "5vh",
    marginBottom: "15vh",
    backgroundColor: "#404040",
  },
  rootGrid: {
    height: "20%",
  },
  contentHeader: {
    height: "50%",
    borderBottomColor: "grey",
  },
  textHeader: {
    padding: "2em",
  },
  userRooms: {
    borderBottomColor: "grey",
  },
  divider: {
    backgroundColor: "grey",
  },
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding:"20px"
  },
  listItem: {
    paddingRight:"9.5em"
  }
}));

const Room = ({ isOpen }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.rootPaper} elevation={4}>
        <Grid container className={classes.rootGrid}>
          <Grid
            component={Box}
            className={classes.contentHeader}
            borderBottom={1}
            item
            container
          >
            <Grid item className={classes.textHeader} xs={3} sm={2}>
              <Typography>Room name</Typography>
            </Grid>
            <Grid item className={classes.textHeader} xs={3} sm={2}>
              <Typography>Description</Typography>
            </Grid>
            <Grid item className={classes.textHeader} xs={3} sm={2}>
              Owner
            </Grid>
            <Grid item className={classes.textHeader} xs={3} sm={2}>
              Time elapsed
            </Grid>
          </Grid>

          <Grid
            component={Box}
            className={classes.userRooms}
            borderBottom={1}
            item
            container
          >
            <List className={classes.flexContainer}>
              <ListItem className={classes.listItem} >
                <ListItemText primary={"About"} />
              </ListItem>

              <ListItem className={classes.listItem}>
                <ListItemText primary={"About"} />
              </ListItem>

              <ListItem>
                <ListItemText primary={"About"} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
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
