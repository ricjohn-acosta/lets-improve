import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { showSidebar } from "../store/actions/views";
import Logout from "./Logout";
import RoomButton from "./RoomButton";

import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${240}px)`,
    marginLeft: 240,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  sidebarFooterLoggedIn: {
    marginTop: "60vh",
  },
  sidebarFooterLoggedOut: {
    marginTop: "75vh",
  },
}));

const Sidebar = ({ isOpen, showSidebar, loggedIn }) => {
  const classes = useStyles();
  const theme = useTheme();

  const loggedInComponents = (
    <>
      <List>
        {["Profile", "Your tasks", "History"].map((text, index) => (
          <ListItem button disabled key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <RoomButton />
      </List>
      <Divider />
      <List
        className={
          loggedIn
            ? classes.sidebarFooterLoggedIn
            : classes.sidebarFooterLoggedOut
        }
      >
        <Divider />
        <ListItem disabled button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
        <Logout />
      </List>
    </>
  );

  const loggedOutComponents = (
    <>
      <Divider />
      <ListItem component={Link} to={"/"} button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} />
      </ListItem>

      <ListItem component={Link} to={"/login"} button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"Login"} />
      </ListItem>

      <ListItem component={Link} to={"/signup"} button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"Signup"} />
      </ListItem>
      <Divider />
    </>
  );

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => showSidebar(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      {loggedIn ? loggedInComponents : loggedOutComponents}
    </Drawer>
  );
};

const mapStateToProps = ({ views, firebase }) => {
  return {
    isOpen: views.drawer.isOpen,
    loggedIn: firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: (yesOrNo) => dispatch(showSidebar(yesOrNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
