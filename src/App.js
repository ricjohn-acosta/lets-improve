import React from 'react'
import logo from './logo.svg'
import './App.css'
import fire from './fire'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import Home from './components/Home'
import Signup from './components/Signup'

export default class App extends React.Component {

  state = {
    user: {}
  }
  
  componentDidMount = () => {
    this.authListener()
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({user})
      } else {
        this.setState({user:null})
      }
    })
  }

  render() {
    return (
      <>
      {this.state.user ? <Home /> : <Signup />}
      <Route path="/signup" component={Signup}/> 
      </>
    )
  }

}

