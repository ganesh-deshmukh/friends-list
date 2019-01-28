import React, { Component } from "react";
import Friend from "./Friend";

class Friends extends Component {
  state = {
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
        name: "Mayur",
        email: "mayur@gmail.com",
        phone: "1234567890",
        addr: "Mumbai East"
      },
      {
        id: 3,
        name: "Big Head",
        email: "Bighead@gmail.com",
        phone: "3334445555",
        addr: "Silicon Valley"
      }
    ]
  };

  render() {
    const { friends } = this.state;
    return (
      <div>
        {friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}
export default Friends;
