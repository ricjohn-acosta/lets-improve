import React from 'react';
import { Link, Route } from "react-router-dom";
import fire from '../fire'
import Signup from './Signup'

const Home = (props) => {
  const logout = () => {
    fire.auth().signOut()
  }
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
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Home