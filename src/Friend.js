import React, { Component } from "react";
import PropTypes from "prop-types";

class Friends extends Component {
  render() {
    const { name, email, phone, addr } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name} </h4>
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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  addr: PropTypes.string.isRequired
};

export default Friends;
