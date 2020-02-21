import { SIGNUP_SUCCESS } from "../actions/actionTypes";

const initialState = {
  authStatus: false,
  user: {}
};

export default function test(state = initialState, action) {
  if (action.type === SIGNUP_SUCCESS) {
    return { ...state, authStatus: action.authenticated, user: action.user};
  } else {
    return state
  }
}
