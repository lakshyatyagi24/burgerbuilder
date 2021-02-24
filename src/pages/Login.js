import React, { Component } from "react"; import "./Login.css";
import user from "../img/2.svg";
import pass from "../img/3.svg";
import loginI from "../img/4.svg";
import registerI from "../img/5.svg";
import forgetI from "../img/6.svg";

class Login extends Component {

  checkLogin(e) {
    e.preventDefault();
    var usrname = e.target.elements.userName.value;
    var pswd = e.target.elements.password.value;
    if(usrname == 'admin' && pswd == 'admin') {
      alert("Login Successful")
    }
    else if(usrname != 'admin' && pswd == 'admin') {
      alert("User not exist")
    }
    else if(usrname == 'admin' && pswd != 'admin') {
      alert("Password not matched")
    }
    else {
      alert("Wrong Credentials")
    }

  }

  render() {
    return (
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
            <input type="userName" name="userName" placeholder="User Name" id="userName" required />
            <img src={user} alt="user" id="second" />
          </div>
          <div id="imgPassword">
            <input type="password" name="password" placeholder="Password" id="password" required />
            <img src={pass} alt="password" id="third" />
          </div>
          <button onSubmit={this.LoginCheck} id="submit">Log In</button>
        </form>
      </div>
    )
  }
}

export default Login;