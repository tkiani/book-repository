// Code from https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669

import React, { Component } from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };onSubmit = e => {
    e.preventDefault();const userData = {
      email: this.state.email,
      password: this.state.password
    };console.log(userData);
  };render() {
    const { errors } = this.state;return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b>
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button type="submit" >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}export default Login;