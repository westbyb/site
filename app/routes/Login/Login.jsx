import React from 'react';

import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div id="login">
        <div id="loginform">
          <div className="login-banner">
            <span id="logo">
              <div className="logo-top"></div>
              <div className="logo-mid"></div>
              <div className="logo-bot"></div>
            </span>
            <h4>Login Form</h4>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button className="btn login">
            Login
          </button>
          <button className="btn register">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
