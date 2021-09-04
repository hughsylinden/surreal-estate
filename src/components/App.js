import "../styles/App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  const initialState = {
    userId: "",
  };
  const [userId, setUserId] = useState(initialState.userId);

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(() => {
      setUserId("");
    });
  };

  return (
    <div className="App">
      <NavBar userId={userId} onLogin={handleLogin} onLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={userId} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
