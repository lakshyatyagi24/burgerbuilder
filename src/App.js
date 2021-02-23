import React from "react";
import './App.css';
import Login from "./pages/Login";
import background from "./img/1.jpg";

const App = () => {
  return (
    <div className="App" id="app" style={{ 
      backgroundImage: `url(${background})` 
    }}>
      <Login />
    </div>
  );
}

export default App;
