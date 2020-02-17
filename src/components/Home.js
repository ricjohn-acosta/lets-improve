import React from 'react';
import { Link, Route } from "react-router-dom";
import fire from '../fire'
import Signup from './Signup'

// REDUX
import { connect } from 'react-redux'
import { signoutUser } from '../actions/actions'

const Home = () => {
  const logout = () => {
    fire.auth().signOut()
  }

  const displayUser = () => {
    let user = fire.auth().currentUser
    if (user != null) {
      return user.displayName
    }
  }
  return(
    <div>
      {displayUser()}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <button onClick={logout}>logout</button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
