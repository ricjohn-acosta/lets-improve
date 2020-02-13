import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import Signup from './components/Signup'

export default class App extends React.Component {
  
  
  
  render() {
    return (
      <>
      <Route exact path="/" component={Home}/> 
      <Route path="/signup" component={Signup}/> 
      </>
    )
  }

}

