import React, { Component } from "react";

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        {
          id: 1,
          name: "GaneshA Deshmukh",
          email: "gd@gmail.com",
          phone: "9876543210",
          addr: "Mumbai West"
        },
        {
          id: 2,
          name: "John Doe",
          email: "john@gmail.com",
          phone: "1234567890",
          addr: "Mumbai East"
        },
        {
          id: 3,
          name: "Big Head",
          email: "Bighead@gmail.com",
          phone: "333-444-5555",
          addr: "Silicon Valley"
        }
      ]
    };
  }
  render() {
    const { friends } = this.state;
    return (
      <div>
        {friends.map(friend => (
          <h1>{friend.name}</h1>
        ))}
      </div>
    );
  }
}

export default Friends;
