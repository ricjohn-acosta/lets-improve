import React from 'react'
import logo from './logo.svg'
import './App.css'
import fire from './fire'

// React-router
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

// Components
import Home from './components/Home'
import Signup from './components/Signup'

// Redux
import { connect } from 'react-redux'
import { authUser } from './actions/actions'


class App extends React.Component {

  // TODO: PUT USER IN GLOBAL STATE
  // state = {
  //   user: {}
  // }
  
  componentDidMount = () => {
    this.authListener()
  }
  
  // HANDLE SET STATES IN REDUCER
  authListener = () => {
    // fire.auth().onAuthStateChanged(user => {
    //   if (user) {
    //     this.setState({user})
    //   } else {
    //     this.setState({user:null})
    //   }
    // })

    this.props.dispatch(authUser())
  }

  render() {
    return (
      <>
      {this.props.user ? <Home /> : <Signup />}
      <Route path="/signup" component={Signup}/> 
      </>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)

