import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

import { firestoreConnect } from "react-redux-firebase";
import CreateRoomForm from "./CreateRoomForm";
import moment from "moment";

import { joinRoom } from "../store/actions/rooms";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { borders } from "@material-ui/system";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  rootPaper: {
    position: "relative",
    width: "100%",
    maxHeight: "5vh",
    marginTop: "5vh",
    backgroundColor: "#404040",
  },
  rootGrid: {
    minHeight: "20vh",
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
    padding: "20px",
  },
  listItem: {
    paddingRight: "9.5em",
  },
  tableBody: {
    backgroundColor: "#404040",
    color: "#EAEAEA",
    paddingRight: "4",
    paddingLeft: "5",
  },
  tableHeader: {
    backgroundColor: "black",
    color: "white",
  },
  tableFooter: {
    color: "#EAEAEA",
  },
  buttons: {
    root: {
      color: "green",
    },
  },
}));

const columns = [
  { id: "room_name", label: "Room name", minWidth: 170 },
  { id: "room_description", label: "Description", minWidth: 100 },
  {
    id: "room_owner",
    label: "Owner",
    minWidth: 170,
    align: "right",
  },
  {
    id: "room_size",
    label: "Size",
    minWidth: 170,
    align: "right",
  },
  {
    id: "timeElapsed",
    label: "Time elapsed",
    minWidth: 170,
    align: "right",
  },
  {
    id: "button",
    minWidth: 170,
    align: "right",
  },
];

const RoomContent = ({ joinRoom, rooms, userId, requested }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentTime, setCurrentTime] = React.useState(moment());

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCurrentTime(moment());
  //   }, 1800000);

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchData = () => {
    console.log(rooms);

    let fetchedData = {
      data: Object.values(rooms),
    };

    let newData = fetchedData.data.map((room) => {
      return {
        ...room,
        button: (
          <Link to={`/rooms/${room.room_owner}`}>
          
          <Button
            className={classes.joinBtn}
            onClick={() => joinRoom(room.id)}
            color={"primary"}
            variant={"contained"}
          >
            JOIN
          </Button>
          </Link>
        ),
        timeElapsed: currentTime.from(room.timeElapsed, true),
      };
    });

    return newData;
  };

  const tableBody = () => {
    if (requested && rooms) {
      console.log(fetchData());
      return (
        <TableBody>
          {fetchData()
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                  className={classes.tableBody}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={row.code}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        className={classes.tableBody}
                        key={column.id}
                        align={column.align}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
        </TableBody>
      );
    }
  };

  const createRoomButton = () => {
    if (requested && rooms) {
      console.log(rooms.userId);
      if (rooms.hasOwnProperty(userId)) {
        return null;
      } else {
        return <CreateRoomForm />;
      }
    } else {
      return <CreateRoomForm />;
    }
  };

  return (
    <>
      {" "}
      <Paper className={classes.rootPaper} elevation={4}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className={classes.tableHeader}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {tableBody()}
          </Table>
        </TableContainer>
        {createRoomButton()}
        <TablePagination
          className={classes.tableFooter}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={requested && rooms ? fetchData().length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        ></TablePagination>
      </Paper>
    </>
  );
};

const mapStateToProps = ({ firestore, firebase }) => {
  return {
    rooms: firestore.data.rooms,
    userId: firebase.auth.uid,
    requested: firestore.status.requested,
    requesting: firestore.status.requesting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    joinRoom: (roomOwner) => dispatch(joinRoom(roomOwner)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: "rooms" }])
)(RoomContent);
