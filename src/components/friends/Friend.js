import React, { Component } from "react";
import PropTypes from "prop-types";

import { Consumer } from "../../context";

class Friends extends Component {
  state = {
    onShowClick: false
  };

  onShowClick = (name, e) => {
    console.log("showing friends");
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_FRIEND",
      payload: id
    });
  };

  render() {
    const { id, name, email, phone, addr } = this.props.friend;
    const { onShowClick } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body border-success mb-3">
              <h4>
                {name + " "}
                <i
                  onClick={() => {
                    this.setState({
                      onShowClick: !this.state.onShowClick
                    });
                  }}
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down text-primary"
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  className="fas fa-times"
                />
              </h4>
              {onShowClick ? (
                <ul className="list-group">
                  <li className="list-group-item">Emailid: {email} </li>
                  <li className="list-group-item">Phoneno: {phone} </li>
                  <li className="list-group-item">Address: {addr} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Friends.propTypes = {
  friend: PropTypes.object.isRequired
};

export default Friends;
