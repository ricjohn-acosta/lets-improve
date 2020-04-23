import * as actions from "./actionTypes";

export function showSidebar(yesOrNo) {
  return (dispatch) => {
    dispatch({ type: actions.SIDEBAR_OPEN, payload: yesOrNo });
  };
}


