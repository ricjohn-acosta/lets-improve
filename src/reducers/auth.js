import { SIGNUP_SUCCESS } from "../actions/actionTypes";

const USER_STATE = {
  authStatus: false
};

export default function test(state = USER_STATE, action) {
  if (action.type === SIGNUP_SUCCESS) {
    return { ...state, authStatus: action.payload};
  }
}
