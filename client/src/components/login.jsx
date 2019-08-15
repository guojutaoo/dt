import React, { Component } from "react";
import axios from "axios";
import "./css/login.css";
class Login extends Component {
  state = { email: "", password: "", auth: false, flag: "false" };

  handleChange = input => {
    if (input.target.type === "email")
      this.setState({ email: input.target.value });
    if (input.target.type === "password")
      this.setState({ password: input.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/login", {email: this.state.email, password: this.state.password
      })
      .then(res=> {
        this.setState({auth: res.data}), console.log(res);
      });
  };

  render() {
    return (
      <div className="login">
        <h1>Login Form</h1>
        <form
          onChange={this.handleChange}
          className="loginForm"
          onSubmit={this.submitForm}
        >
          <input
            type="email"
            name="email"
            className="login-form-text"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="login-form-text"
            placeholder="Password"
          />
          <input
            type="submit"
            className="login-form-btn"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default Login;
