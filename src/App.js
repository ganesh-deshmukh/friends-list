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
          <Friends
            name="GaneshA Deshmukh"
            email="gd@gmail.com"
            phone="9876543210"
            addr="Mumbai West"
          />
          <Friends
            name="John Doe"
            email="john@gmail.com"
            phone="1234567890"
            addr="Mumbai East"
          />
        </div>
      </div>
    );
  }
}

export default App;
