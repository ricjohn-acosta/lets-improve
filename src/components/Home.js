import React from 'react';
import { Link, Route } from "react-router-dom";
import fire from '../fire'
import Signup from './Signup'

// REDUX
import { connect } from 'react-redux'

const Home = (props) => {
  // const logout = () => {
  //   fire.auth().signOut()
  // }

  // const displayUser = () => {
  //   let user = fire.auth().currentUser
  //   if (user != null) {
  //     return user.displayName
  //   }
  // }
  return(
    <div>
      <li>
        {console.log(props.user.displayName)}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <button>logout</button>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.signinReducer.user,
  };
};
export default connect(mapStateToProps)(Home)
