import React, { Component } from "react";
import Friends from "./Friends";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Friends-Lister" />
          <div className="container">
            <Friends />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
