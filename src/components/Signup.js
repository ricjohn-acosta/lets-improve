import React from 'react';
import fire from '../fire'

export default class Login extends React.Component {
  state = {
    userInfo: []
  }

  // handles user registration
  handleSignup = (e) => {
    e.preventDefault()
    let userEmail = e.target[0].value
    let password = e.target[1].value
    console.log(userEmail)
    console.log(password)

    fire.auth().createUserWithEmailAndPassword(userEmail, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    })
  }

  render() {
    
    return (
      <>
        <form onSubmit={this.handleSignup}>
          Email:
          <input type="email" name="email" onChange={(e) => console.log(e.target.value)}/>
        <br />
          Password:
          <input type="text" name="password" onChange={(e) => console.log(e.target.value)}/>
        <br />
        <button type="submit" onClick={this.display}>Submit</button>
        </form>
      </>
    )
  }
}