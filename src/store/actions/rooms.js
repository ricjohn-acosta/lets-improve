import * as actions from "./actionTypes";
import moment from "moment";

export function addRoom(roomName, roomDescription, roomSize) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actions.ADD_ROOM_START });
    const firestore = getFirebase().firestore();
    const userId = getState().firebase.auth.uid;
    const dateCreated = moment().format();

    firestore
      .collection("rooms")
      .doc(userId)
      .set({
        id: userId,
        room_name: roomName,
        room_description: roomDescription,
        room_size: roomSize,
        room_owner: getState().firebase.auth.displayName,
        timeElapsed: dateCreated,
      })
      .then(() => {
        console.log("ROOM ADDED!");
        firestore
          .collection("rooms")
          .doc(userId)
          .collection("users_connected")
          .doc(userId)
          .set({ join_date: new Date() })
          .then(() => {
            dispatch({ type: actions.JOIN_ROOM_SUCCESS });
            console.log("USER JOINED ROOM");
            firestore
              .collection("users")
              .doc(userId)
              .update({ in_room: true })
              .then(() => {
                console.log("USER IS IN A ROOM");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
            dispatch({ type: actions.JOIN_ROOM_FAIL, payload: err.message });
          });
        dispatch({ type: actions.ADD_ROOM_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.ADD_ROOM_FAIL, payload: err.message });
      });
  };
}

// export function joinRoom() {}
export function joinRoom(userId) {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: actions.JOIN_ROOM_START });
    const firestore = getFirebase().firestore();
    const loggedinUser = getState().firebase.auth.uid;
    firestore
      .collection("rooms")
      .doc(userId)
      .collection("users_connected")
      .doc(loggedinUser)
      .set({ join_date: new Date() })
      .then(() => {
        dispatch({ type: actions.JOIN_ROOM_SUCCESS });
        console.log("USER JOINED ROOM");
        firestore
          .collection("users")
          .doc(loggedinUser)
          .update({ in_room: true })
          .then(() => {
            console.log("USER STATE CHANGED");
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.JOIN_ROOM_FAIL, payload: err.message });
      });
  };
}
