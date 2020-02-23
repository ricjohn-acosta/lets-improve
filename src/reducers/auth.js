import { SIGNUP_SUCCESS, SIGNOUT_SUCCESS } from "../actions/actionTypes";

const initialState = {
  authStatus: false,
  user: {}
};

export default function authReducer(state = initialState, action) {
  if (action.type === SIGNUP_SUCCESS) {
    return { ...state, authStatus: action.authStatus, user: action.user };
  } else if (action.type === SIGNOUT_SUCCESS) {
    return { ...state, authStatus: action.authStatus, user: action.user };
  } else {
    return state;
  }
}
