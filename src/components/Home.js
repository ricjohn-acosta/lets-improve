import React from 'react';
import { Link } from "react-router-dom";
const Home = (props) => {
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
    </div>
  )
}

export default Home