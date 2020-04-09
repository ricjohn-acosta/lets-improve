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
  return { ...state, loading: true };
};

const authEnd = state => {
  return { ...state, loading: false };
};

const authSuccess = state => {
  return { ...state, error: false };
};

const authFail = (state, payload) => {
  return { ...state, error: payload };
};

const verifyEmailStart = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: true }
  };
};

const verifyEmailSuccess = state => {
  return {
    ...state,
    verifyEmail: { ...state.verifyEmail, loading: false, error: false }
  };
};

const verifyEmailFail = (state, payload) => {
  return {
    ...state.verifyEmail,
    verifyEmail: { ...state.verifyEmail, loading: false, error: payload }
  };
};

// INITIAL STATE CHANGE MECHANISM
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

    case actions.VERIFY_EMAIL_START:
      return verifyEmailStart(state);

    case actions.VERIFY_EMAIL_SUCCESS:
      return verifyEmailSuccess(state);

    case actions.VERIFY_EMAIL_FAIL:
      return verifyEmailFail(state, payload);
      
    default:
      return state;
  }
};
