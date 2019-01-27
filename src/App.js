import React, { Component } from "react";
import Friends from "./Friends";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>The App Component </h1>
        <Friends />
      </div>
    );
  }
}

export default App;
