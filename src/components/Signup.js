import React from 'react';
import fire from '../fire'
import firebase, { auth } from 'firebase'
export default class Login extends React.Component {
  state = {
    userInfo: []
  }

  // handles user registration
  handleSignup() {
  }

  display() {
    return console.log('test')
  }

  // // creates dummy users
  // createUsers() {
  //   let db = fire.database()
  //   // Create user-details table
  //   let ref = db.ref('users')
  //   // let usersRef = ref.child('details')
  //   ref.set({
  //     user1: {
  //       id: 0,
  //       username: 'username1',
  //       password: 'password1'
  //     },
  //     user2: {
  //       id: 1,
  //       username: 'username2',
  //       password: 'password2'
  //     },
  //     user3: {
  //       id: 3,
  //       username: 'username3',
  //       password: 'password3'
  //     }
  //   })
  // }

  render() {
    
    // // Creates mock users
    // this.createUsers()
    return (
      <>
        <form onSubmit={this.handleSignup}>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={this.display}/>
        </form>
      </>
    )
  }
}