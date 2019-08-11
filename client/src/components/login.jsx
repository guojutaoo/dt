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

  handleSubmit = () => {
    this.setState({ auth: true });
  };

  submitForm = event => {
    event.preventDefault();
    axios.post(`http://localhost:8080/login`, { crossdomain: true }, {
      email: "jutaog@uci.edu",
      password: "guojutao" 
    }).then(function(res){
      console.log(res);
    })
  };

  render() {
    alert(this.state.flag);
    return (
      <div className="login">
        <h1>Login Form</h1>
        <form
          // onChange={this.handleChange}
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
            // onSubmit={this.handleSubmit}
            // onClick={this.submitForm}
          />
        </form>
      </div>
    );
  }
}

export default Login;
