import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

class AddFriends extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    addr: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone, addr } = this.state;
    const newFriend = {
      id: uuid(),
      name,
      email,
      phone,
      addr
    };

    dispatch({ type: "ADD_FRIEND", payload: newFriend });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, addr } = this.state;

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
                  <div className="form-groups">
                    <label htmlFor="name">Name</label>
                    <input
                      value={name}
                      type="text"
                      name="name"
                      className="form-control form-control-lg mb-3"
                      placeholder="Enter name"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-groups">
                    <label htmlFor="name">Email</label>
                    <input
                      value={email}
                      type="email"
                      name="email"
                      className="form-control form-control-lg mb-3 "
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="name">Phone</label>
                    <input
                      value={phone}
                      type="text"
                      name="phone"
                      className="form-control form-control-lg mb-3"
                      placeholder="Enter phone"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-groups">
                    <label htmlFor="name">Address</label>
                    <input
                      value={addr}
                      type="text"
                      name="addr"
                      className="form-control form-control-lg mb-3"
                      placeholder="Enter address"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    // value={}
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
