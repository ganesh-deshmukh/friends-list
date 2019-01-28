import React, { Component } from "react";
import Friend from "./Friend";
import { Consumer } from "./context";

class Friends extends Component {
  deleteFriend = id => {
    console.log(id);
    const { friends } = this.state;
    const newFriends = friends.filter(item => item.id !== id);

    this.setState({
      friends: newFriends
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { friends } = value;
          return (
            <React.Fragment>
              {friends.map(friend => (
                <Friend
                  key={friend.id}
                  friend={friend}
                  deleteClickHandler={this.deleteFriend.bind(this, friend.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Friends;
