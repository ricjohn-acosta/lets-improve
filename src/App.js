import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Import components
import Signup from './components/Signup'
import Login from './components/Login'

export default class App extends React.Component {
  
  
  
  render() {
    return (
      // I want this to be 
      <>
      {/* <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>


      <Route exact path="/signup" component={Signup}/>  */}

      {/* Routes */}
      <Route exact path="/" component={Signup}/>
      <Route exact path="/" component={Signup}/>

      </>
    )
  }

}

