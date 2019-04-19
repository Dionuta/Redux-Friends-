//React
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from './components/Home';

//Components
import Login from "./components/Login/Login";
import Friends from './components/FriendsList/Friends';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" component={Friends} />
        </div>
      </Router>
    );
  }
}

export default App;
