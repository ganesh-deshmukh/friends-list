import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layouts/TextInputGroup";

class AddFriends extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    addr: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, addr } = this.state;

    // error checking
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required field"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required field"
        }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone number is required field"
        }
      });
      return;
    }
    if (addr === "") {
      this.setState({
        errors: {
          addr: "Address is required field"
        }
      });
      return;
    }
    const newFriend = {
      id: uuid(),
      name,
      email,
      phone,
      addr
    };

    dispatch({ type: "ADD_FRIEND", payload: newFriend });

    this.setState({
      name: "",
      email: "",
      phone: "",
      addr: "",
      errors: {}
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, addr, errors } = this.state;

    return (
      <Consumer>
        {value => {
          // value contains entire state
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Friends</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="EmailID"
                    name="email"
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone Number"
                    name="phone"
                    placeholder="Enter your Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Address"
                    name="addr"
                    placeholder="Enter your Address"
                    value={addr}
                    onChange={this.onChange}
                    error={errors.addr}
                  />
                  <input
                    type="submit"
                    value="Add Friend"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddFriends;
