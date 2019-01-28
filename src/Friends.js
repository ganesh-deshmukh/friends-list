import React, { Component } from "react";

class Friends extends Component {
  render() {
    const { name, email, phone, addr } = this.props;
    return (
      <div>
        <h4>{name} </h4>
        <ul>
          <li>Emailid: {email} </li>
          <li>Phoneno: {phone} </li>
          <li>Address: {addr} </li>
        </ul>
      </div>
    );
  }
}

export default Friends;
