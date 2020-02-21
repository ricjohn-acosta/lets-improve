import React from 'react';
import { Link, Route } from "react-router-dom";
import fire from '../fire'
import Signup from './Signup'

// REDUX
import { connect } from 'react-redux'

const Home = () => {
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

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect()(Home)
