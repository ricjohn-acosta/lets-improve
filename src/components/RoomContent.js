import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { addRoom } from "../store/actions/rooms";

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

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  head: {
    color: "white",
  },
}))(TableRow);

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
  { id: "room_description", label: "Room name", minWidth: 170 },
  { id: "room_name", label: "Description", minWidth: 100 },
  {
    id: "owner",
    label: "Owner",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "size",
    label: "Size",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "timeElapsed",
    label: "Time elapsed",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "button",
    minWidth: 170,
    align: "right",
    // format: () => (
    //   <Button color="primary" size="large" variant="contained">
    //     Join
    //   </Button>
    // ),
  },
];

function createData(name, code, population, size, timeElapsed) {
  const density = population / size;
  return { name, code, population, size, timeElapsed, density };
}

const rows = [
  // createData(
  //   "Anyone can join!!",
  //   "just chilin room",
  //   "mookentooken",
  //   "2" + "/16",
  //   "3 minutes"
  // ),
  // createData("India", "IN", 1324171354, 3287263),
  // createData("China", "CN", 1403500365, 9596961),
  // createData("Italy", "IT", 60483973, 301340),
  // createData("United States", "US", 327167434, 9833520),
  // createData("Canada", "CA", 37602103, 9984670),
  // createData("Australia", "AU", 25475400, 7692024),
  // createData("Germany", "DE", 83019200, 357578),
  // createData("Ireland", "IE", 4857000, 70273),
  // createData("Mexico", "MX", 126577691, 1972550),
  // createData("Japan", "JP", 126317000, 377973),
  // createData("France", "FR", 67022000, 640679),
  // createData("United Kingdom", "GB", 67545757, 242495),
  // createData("Russia", "RU", 146793744, 17098246),
  // createData("Nigeria", "NG", 200962417, 923768),
  // createData("Brazil", "BR", 210147125, 8515767),
  {
    name: "test",
    code: "test",
    population: "test",
    size: "test",
    timeElapsed: "test",
  },
];

const RoomContent = ({ addRoom, rooms, userId, requested }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataReceived, setDataReceived] = React.useState(false);
  const [room, setRoom] = React.useState({
    data: [
      {
        name: "test",
        description: "asd",
        owner: "test",
        size: "test",
        timeElapsed: "test",
        button: (
          <Button color="primary" size="large" variant="contained">
            Join
          </Button>
        ),
      },
    ],
  });

  console.log(room.data);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleAddRoom = () => {
    setRoom((prevState) => {
      const data = [...prevState.data];
      data.push({
        name: "test1",
        description: "test1",
        owner: "test1",
        size: "test1",
        timeElapsed: "test1",
        button: (
          <Button color="primary" size="large" variant="contained">
            Join
          </Button>
        ),
      });
      return { ...prevState, data };
    });
  };

  // const handleData = () => {
  //   if (requested && rooms) {
  //     setDataReceived(true);
  //   }
  // };

  // handleData();
  // // const populateList = () => {
  // //   handleData()
  // //   if(dataReceived) {
  // //     let plsWork = {
  // //       data: Object.values(rooms)
  // //     }
  // //     return plsWork
  // //   }
  // // }

  // console.log("populateList", populateList())

  const tableBody = () => {
    if (requested && rooms) {
      let testing = {
        data: Object.values(rooms),
      };
      return (
        <TableBody>
          {testing.data
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
                    console.log(value);
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

            {/* <TableBody>
              {room.data
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
                        console.log(value);
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
            </TableBody> */}
            {tableBody()}
          </Table>
        </TableContainer>
        <Button onClick={() => addRoom("test1","test", "test")}>Create room</Button>
        <TablePagination
          className={classes.tableFooter}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={room.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
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
    addRoom: (roomName, roomDescription, roomSize) =>
      dispatch(addRoom(roomName, roomDescription, roomSize)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => ["rooms"])
)(RoomContent);
