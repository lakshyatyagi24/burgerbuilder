import React from "react";
import './App.css';
import Login from "./pages/Login";
import background from "./img/1.jpg";

const App = () => {
  return (
    <div className="App" id="app" >
      <div id="bgImg" style={{ 
      backgroundImage: `url(${background})`
    }}></div>
      <div id="heading">
        <h1>Burger Builder Login</h1>
      </div>

      <Login />
    </div>
  );
}

export default App;
