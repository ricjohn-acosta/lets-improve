import * as actions from "./actionTypes";

export function addRoom(roomName, description) {
    return (dispatch, getState, {getFirestore}) {
        dispatch({type: actions.ADD_ROOM_START})
    }
}