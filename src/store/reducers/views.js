import * as actions from "../actions/actionTypes";

const initialState = {
  currentRoute: {
    signin: false,
    login: false,
  },
  drawer: {
    isOpen: false,
  },
};

// HELPER FUNCTIONS
const showSidebar = (state, payload) => {
  return {
    ...state,
    drawer: { isOpen: payload },
  };
};

// INITIAL STATE CHANGE MECHANISM
export default (state = initialState, { type, payload }) => {
  switch (type) {
    
    case actions.SIDEBAR_OPEN:
      return showSidebar(state, payload);

    default:
      return state;
  }
};
