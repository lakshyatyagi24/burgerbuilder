import React from "react";
import './App.css';
import Login from "./pages/Login";
import background from "./img/1.jpg";

const App = () => {
  eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))

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
