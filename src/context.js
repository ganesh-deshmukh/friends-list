import React, { Component } from "react";
import axios from "axios";

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
    case "UPDATE_FRIEND":
      return {
        ...state,
        friends: state.friends.map(item => {
          item.id === action.payload.id ? (item = action.payload) : item;
        })
      };
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [action.payload, ...state.friends]
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    friends: [],

    // dispatch is part of state
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({
      friends: res.data
    });
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
