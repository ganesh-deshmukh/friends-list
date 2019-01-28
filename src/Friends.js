import React, { Component } from "react";

class Friends extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name} </h4>
        <ul>
          <li>Emailid: {this.props.email} </li>
          <li>Phoneno: {this.props.phone} </li>
          <li>Address: {this.props.addr} </li>
        </ul>
      </div>
    );
  }
}

export default Friends;
