import React, { Component } from "react";
import ".//css/login.css"

class Registration extends Component {
  state = {email:"", password:"", rePassword:""};

  handleChange=(input)=>{
    if(input.target.type=="email")
    this.setState({email:input.target.value})
    if(input.target.type=="password")
    this.setState({password:input.target.value})
    if(input.target.type=="rePassword")
    this.setState({rePassword:input.target.value})
  }

  handleSubmit=()=>{
    if(this.state.password!==this.state.rePassword) return;
  }
  render() {
      console.log(this.state.password)
    return (
      <div className="login">
        <h1>Registration Form</h1>
        <form onChange={this.handleChange} className="loginForm">
          <div className="border" />
          <input type="email" className="login-form-text" placeholder="Email" />
          <input
            type="password"
            className="login-form-text"
            placeholder="Password"
          />
          <input
            type="RePassword"
            className="login-form-text"
            placeholder="Retype Password"
          />
          <input type="submit" className="login-form-btn" value="Submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Registration;
