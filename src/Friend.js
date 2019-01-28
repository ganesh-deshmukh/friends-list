import React, { Component } from "react";
import PropTypes from "prop-types";

class Friends extends Component {
  state = {};

  onShowClick = (name, e) => {
    console.log(name);
  };

  onDeleteClick = (name, e) => {
    this.props.deleteClickHandler();
    console.log("Delete button is clicked in chile component");
  };

  render() {
    const { name, email, phone, addr } = this.props.friend;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name + " "}
          <i
            onClick={this.onShowClick.bind(this, name)}
            style={{ cursor: "pointer" }}
            className="fas fa-sort-down"
          />
          <i
            onClick={this.onDeleteClick.bind(this, name)}
            style={{ cursor: "pointer", float: "right", color: "red" }}
            className="fas fa-times"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Emailid: {email} </li>
          <li className="list-group-item">Phoneno: {phone} </li>
          <li className="list-group-item">Address: {addr} </li>
        </ul>
      </div>
    );
  }
}

Friends.propTypes = {
  friend: PropTypes.object.isRequired
};

export default Friends;
