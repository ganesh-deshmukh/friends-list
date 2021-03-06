import React, { Component } from "react";
import Friends from "./components/friends/Friends";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";
import AddFriends from "./components/friends/AddFriend";
import EditFriends from "./components/friends/EditFriend";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Friends-Lister" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Friends} />
                <Route exact path="/about/" component={About} />
                <Route exact path="/friend/add" component={AddFriends} />
                <Route exact path="/friend/edit/:id" component={EditFriends} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
