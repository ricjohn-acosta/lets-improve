import * as actions from "./actionTypes";

export function addRoom(roomName, roomDescription, roomSize) {
  return (dispatch, getState, { getFirestore }) => {
    dispatch({ type: actions.ADD_ROOM_START });
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    console.log(userId);
    // Create rooms collection
    // Check if roomName doc exists.
    firestore
      .collection("rooms")
      .doc(userId)
      .get()
      .then((res) => {
        firestore
          .collection("rooms")
          .doc(userId)
          .set({ room_name: roomName, room_description: roomDescription, room_size: roomSize });
        dispatch({ type: actions.ADD_ROOM_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actions.ADD_ROOM_FAIL, payload: err.message });
      });
  };
}
