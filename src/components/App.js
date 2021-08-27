/* eslint-disable react/button-has-type */
import "../styles/App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div className="App">
      {!clicked && (
        <button className="home-btn neon" id="click-here" onClick={handleClick}>
          Enter
        </button>
      )}
      {clicked && (
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Properties} />
            <Route exact path="/add-property" component={AddProperty} />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
