import React from "react";

// STORE
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const Logout = ({ signout }) => {
  return (
    <>
      {/* <button onClick={signout}>logout</button> */}
      <ListItem button onClick={signout}>
      <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </ListItem>
    </>
  );
};

const mapDispatchToProps = {
  signout: actions.signOut,
};
export default connect(null, mapDispatchToProps)(Logout);
