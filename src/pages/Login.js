import React, { Component } from "react"; 
import "./Login.css";
import { BrowserRouter, Redirect } from "react-router-dom";
// eslint-disable-next-line
import layout from "./Layout";
import user from "../img/2.svg";
import pass from "../img/3.svg";
import loginI from "../img/4.svg";
import registerI from "../img/5.svg";
import forgetI from "../img/6.svg";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginSuccessful: false
    };
  }

  checkLogin(e) {
    e.preventDefault();
    var usrname = e.target.elements.userName.value;
    var pswd = e.target.elements.password.value;
    // eslint-disable-next-line
    if (usrname == 'admin' && pswd == 'admin') {
      this.setState({loginSuccessful: true});
    }
    // eslint-disable-next-line
    else if (usrname != 'admin' && pswd == 'admin') {
      alert("User not exist")
    }
    // eslint-disable-next-line
    else if (usrname == 'admin' && pswd != 'admin') {
      alert("Password not matched")
    }
    else {
      alert("Wrong Credentials")
    }
  }

  render() {
    const loginSuccessful = this.state.loginSuccessful;
    if(loginSuccessful) {
      return <BrowserRouter><Redirect to="/order" /><layout /></BrowserRouter>;
    }
    return (
      <div>

        <div id="heading">
          <h1>Burger Builder Login</h1>
        </div>
        <div id="main">
          <div id="left">
            <div id="login">
              <img src={loginI} alt="login" id="fourth" />
                        Login
              </div>
            <div id="register">
              <img src={registerI} alt="register" id="fifth" />
                        Register
              </div>
            <div id="forget">
              <img src={forgetI} alt="forget" id="sixth" />
                        Forget
              </div>
          </div>
          <form method="post" onSubmit={this.checkLogin.bind(this)} id="login_page">
            <h3 id="loginHere">Login Here</h3>
            <div id="imgUser">
              <input type="userName" name="userName" placeholder="User Name" id="userName" required  />
              <img src={user} alt="user" id="second" />
            </div>
            <div id="imgPassword">
              <input type="password" name="password" placeholder="Password"  id="password" required />
              <img src={pass} alt="password" id="third" />
            </div>
            <button onSubmit={this.LoginCheck} id="submit">Log In</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;