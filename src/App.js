import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default class App extends React.Component {
  
  
  
  render() {
    return (
      <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>


      <Route exact path="/signup" component={Signup}/> 
      </>
    )
  }

}

