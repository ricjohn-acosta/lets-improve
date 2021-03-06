import * as actions from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  deleteRoom: {
    error: null,
    loading: false,
  },
};

// HELPER FUNCTIONS
const addRoomStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const addRoomSuccess = (state) => {
  return {
    ...state,
    loading: false,
    error: false,
  };
};

const addRoomFail = (state, payload) => {
  return {
    ...state,
    loading: false,
    error: payload,
  };
};

const joinRoomStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const joinRoomSuccess = (state) => {
  return {
    ...state,
    loading: false,
    error: false,
  };
};

const joinRoomFail = (state, payload) => {
  return {
    ...state,
    loading: false,
    error: payload,
  };
};

// INITIAL STATE CHANGE MECHANISM
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_ROOM_START:
      return addRoomStart(state);

    case actions.ADD_ROOM_SUCCESS:
      return addRoomSuccess(state);

    case actions.ADD_ROOM_FAIL:
      return addRoomFail(state, payload);

    case actions.JOIN_ROOM_START:
      return joinRoomStart(state);

    case actions.JOIN_ROOM_SUCCESS:
      return joinRoomSuccess(state);

    case actions.JOIN_ROOM_FAIL:
      return joinRoomFail(state, payload);

    default:
      return state;
  }
};
