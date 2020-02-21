import { SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialState = {
  authStatus: false,
  user: {}
};

export default function signinReducer(state = initialState, action) {
  if (action.type === SIGNUP_SUCCESS) {
    return { ...state, authStatus: action.authStatus, user: action.user};
  } else {
    return state
  }
}
