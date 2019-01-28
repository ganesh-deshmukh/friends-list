import React, { Component } from "react";
import Friends from "./Friends";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Friends-Lister" />
        <div className="container">
          <h1>The App Component </h1>
          <Friends />
        </div>
      </div>
    );
  }
}

export default App;
