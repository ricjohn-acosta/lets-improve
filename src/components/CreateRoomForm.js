import React from "react";
import { addRoom } from "../store/actions/rooms";
import { connect } from "react-redux";

import { joinRoom } from "../store/actions/rooms";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Icon } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "5px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 5, 3),
  },
  roomSize: {
    position: "relative",
    left: "20%",
  },
  roomSizeTitle: {
    position: "relative",
    right: "-0.5%",
  },
  submitBtn: {
    position: "relative",
    left: "30%",
  },
}));

const CreateRoomForm = ({ addRoom, userId }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [size, setRoomSize] = React.useState(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleRoomCreation(e) {
    e.preventDefault();
    let roomName = e.target[0].value;
    let roomDescription = e.target[1].value;
    let roomSize = size;

    addRoom(roomName, roomDescription, roomSize);
    console.log(roomName);
    console.log(roomDescription);
    console.log(roomSize);
  }

  return (
    <>
      <Button onClick={handleOpen} children={CreateRoomForm}>
        Create room
      </Button>
      <Modal
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <form onSubmit={handleRoomCreation}>
              <Typography className={classes.roomSizeTitle} variant={"h5"}>
                Room details
              </Typography>
              <TextField
                type="text"
                name="roomName"
                label="Room name"
              ></TextField>
              <br />
              <TextField
                type="text"
                name="roomDescription"
                label="Room description"
              ></TextField>
              <br />
              <br />
              <div className={classes.roomSize}>
                <Typography className={classes.roomSizeTitle}>
                  Max room size
                </Typography>
                <IconButton
                  onClick={() => setRoomSize(size - 1)}
                  disabled={size <= 0 ? true : false}
                >
                  <RemoveCircleIcon />
                </IconButton>
                {size}
                <IconButton
                  onClick={() => setRoomSize(size + 1)}
                  disabled={size >= 4 ? true : false}
                >
                  <AddCircleIcon />
                </IconButton>
              </div>
              <Button
                className={classes.submitBtn}
                onClick={() => {
                  handleClose();
                }}
                type="submit"
              >
                SUBMIT
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ firebase, rooms }) => {
  return {
    userId: firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRoom: (roomName, roomDescription, roomSize) =>
      dispatch(addRoom(roomName, roomDescription, roomSize)),
    joinRoom: (roomOwner) => dispatch(joinRoom(roomOwner)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomForm);
