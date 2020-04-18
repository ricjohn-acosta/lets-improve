import React from "react";
import { Link } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const RoomButton = () => {
  return (
    <>
      <ListItem button component={Link} to={"/rooms"}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={"Rooms"} />
      </ListItem>
    </>
  );
};

export default RoomButton;
