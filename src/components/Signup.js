import React from 'react';


export default class Login extends React.Component {
  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <br />
        <input type="submit" value="Submit" />

      </form>
    )
  }
}