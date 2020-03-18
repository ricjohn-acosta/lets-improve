import * as actions from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  verifyEmail: {
    error: null,
    loading: false
  }
};

// HELPER FUNCTIONS
const authStart = state => {
  return { ...state, loading: true};
}

const authEnd = state => {
  return { ...state, loading: false};
}

const authSuccess = state => {
  return { ...state, error: false };
}

const authFail = (state, payload) => {
  return { ...state, error: payload}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.AUTH_START:
      return authStart(state);

    case actions.AUTH_END:
      return authEnd(state);

    case actions.AUTH_SUCCESS:
      return authSuccess(state);

    case actions.AUTH_FAIL:
      return authFail(state, payload);
    
    default:
      return state;
  }
};

// // WORKING SOLUTION
// import { SIGNUP_SUCCESS, SIGNOUT_SUCCESS } from "../actions/actionTypes";

// const initialState = {
//   authStatus: false,
//   user: {}
// };

// export default function authReducer(state = initialState, action) {
//   if (action.type === SIGNUP_SUCCESS) {
//     return { ...state, authStatus: action.authStatus, user: action.user };
//   } else if (action.type === SIGNOUT_SUCCESS) {
//     return { ...state, authStatus: action.authStatus, user: action.user };
//   } else {
//     return state;
//   }
// }