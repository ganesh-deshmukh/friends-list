import React, { Component } from "react";
import Friends from "./components/friends/Friends";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";
import AddFriends from "./components/friends/AddFriends";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Friends-Lister" />
          <div className="container">
            <AddFriends />
            <Friends />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
