import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>The App Component </h1>
      </div>
    );
  }
}

export default App;
