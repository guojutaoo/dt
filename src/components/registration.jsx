import React, { Component } from "react";
import ".//css/login.css"

class Registration extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <h1>Registration Form</h1>
        <form action="" className="loginForm">
          <div className="border" />
          <input type="email" className="login-form-text" placeholder="Email" />
          <input
            type="password"
            className="login-form-text"
            placeholder="Password"
          />
          <input
            type="password"
            className="login-form-text"
            placeholder="Retype Password"
          />
          <input type="submit" className="login-form-btn" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Registration;
