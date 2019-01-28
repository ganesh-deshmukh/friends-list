import React, { Component } from "react";
import PropTypes from "prop-types";

class Friends extends Component {
  render() {
    const { name, email, phone, addr } = this.props;
    return (
      <div>
        <h4>{name} </h4>
        <ul>
          <li>Emailid: {email} </li>
          <li>Phoneno: {phone} </li>
          <li>Address: {addr} </li>
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
