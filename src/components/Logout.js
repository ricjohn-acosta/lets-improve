import React from "react";

// STORE
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

const Logout = ({ signout }) => {
  return (
    <>
      <button onClick={signout}>logout</button>
    </>
  );
};

const mapDispatchToProps = {
  signout: actions.signOut,
};
export default connect(null, mapDispatchToProps)(Logout);
