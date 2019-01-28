import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_FRIEND":
      return {
        ...state,
        friends: state.friends.filter(
          friend => friend.id !== action.payload
          // payload is info sent = id of clicked-element.
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    friends: [
      {
        id: 1,
        name: "Erlich Backman",
        email: "gd@gmail.com",
        phone: "9876543210",
        addr: "Mumbai West"
      },
      {
        id: 2,
        name: "Richard Hendricks",
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
    ],

    // dispatch is part of state
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
