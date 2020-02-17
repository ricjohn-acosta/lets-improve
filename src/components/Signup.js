import React from 'react';
import fire from '../fire'

export default function Signup() {

  // handles user registration
  const handleSignup = (e) => {
    e.preventDefault()
    let userEmail = e.target[0].value
    let password = e.target[1].value
    let username = e.target[2].value
    console.log(userEmail)
    console.log(password)
    console.log(username)

    // Create user account
    fire.auth().createUserWithEmailAndPassword(userEmail, password)
      .then((result) => {
        return result.user.updateProfile({
          displayName: username
        })
      }).catch(error => {
        var errorCode = error.code
        var errorMessage = error.message
      })


    fire.auth().signInWithEmailAndPassword(userEmail, password).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
    
  }

    
    return (
      <>
        <form onSubmit={handleSignup}>
          Email:
          <input type="email" name="email" onChange={(e) => console.log(e.target.value)}/>
        <br />
          Password:
          <input type="password" name="password" onChange={(e) => console.log(e.target.value)}/>
        <br />
          Username:
          <input type="text" name="username" onChange={(e) => console.log(e.target.value)}/>
        <br />
        <button type="submit">Submit</button>
        </form>
      </>
    )
  
}