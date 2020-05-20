import React from "react";
import NavBar from "./components/navBar";
import "./assets/styles/App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute exact path="/protected" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
