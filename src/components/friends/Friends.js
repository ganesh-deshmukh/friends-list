import React, { Component } from "react";
import Friend from "./Friend";
import { Consumer } from "../../context";

class Friends extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { friends } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3">
                <span className="text-primary">Friends </span>List
              </h1>
              {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Friends;
