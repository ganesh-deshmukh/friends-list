import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import axios from "axios";

class ExportFriends extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    addr: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const friend = res.data;

    this.setState({
      name: friend.name,
      email: friend.email,
      phone: friend.phone,
      addr: friend.address
    });
  }

  onSubmit = async (dispatch, e) => {
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

    const updfriend = {
      name,
      email,
      phone,
      addr
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updfriend
    );

    dispatch({ type: "UPDATE_friend", payload: res.data });

    // Clear State
    this.setState({
      name: "",
      email: "",
      phone: "",
      addr: "",
      errors: {}
    });

    this.props.history.push("/");
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
            <div className="card mb-3 border-success">
              <div className="card-header ">Edit Friends</div>
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
                    value="Edit Friend"
                    className="mt-3 btn btn-block btn-primary"
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

export default ExportFriends;
