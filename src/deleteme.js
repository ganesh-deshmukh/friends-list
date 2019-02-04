import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_friend":
      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.payload)
      };
    case "ADD_friend":
      return {
        ...state,
        friends: [action.payload, ...state.friends]
      };
    case "UPDATE_friend":
      return {
        ...state,
        friends: state.friends.map(friend =>
          friend.id === action.payload.id ? (friend = action.payload) : friend
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    friends: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ friends: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
