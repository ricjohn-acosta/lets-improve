import * as actions from "./actionTypes";

export function showSidebar(yesOrNo) {
  return (dispatch) => {
    dispatch({ type: actions.SIDEBAR_OPEN, payload: yesOrNo });
  };
  //   return { type: actions.SIDEBAR_OPEN, payload: yesOrNo };
}

// export function hideSidebar() {
//   return { type: actions.SIDEBAR_CLOSE, payload: false };
// }
