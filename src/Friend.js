import React, { Component } from "react";
import PropTypes from "prop-types";

class Friends extends Component {
  // constructor() {
  //   super();
  //   this.state = {};
  //   this.onShowClick = this.onShowClick.bind(this);
  // }

  state = {};

  onShowClick = e => {
    console.log(e.target.className);
  };
  render() {
    const { name, email, phone, addr } = this.props.friend;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name + " "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
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
