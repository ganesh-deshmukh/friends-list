import React, { Component } from "react";

class AddFriends extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    addr: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, email, phone, addr } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Friends</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-groups">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.onChange}
                value={name}
                type="text"
                name="name"
                className="form-control form-control-lg mb-3"
                placeholder="Enter name"
              />
            </div>

            <div className="form-groups">
              <label htmlFor="name">Email</label>
              <input
                onChange={this.onChange}
                value={email}
                type="email"
                name="email"
                className="form-control form-control-lg mb-3 "
                placeholder="Enter email"
              />
            </div>
            <div className="form-groups">
              <label htmlFor="name">Phone</label>
              <input
                onChange={this.onChange}
                value={phone}
                type="phone"
                name="phone"
                className="form-control form-control-lg mb-3"
                placeholder="Enter phone"
              />
            </div>
            <div className="form-groups">
              <label htmlFor="name">Address</label>
              <input
                onChange={this.onChange}
                value={addr}
                type="text"
                name="addr"
                className="form-control form-control-lg mb-3"
                placeholder="Enter address"
              />
            </div>
            <input
              // value={}
              type="submit"
              value="Add Contact"
              className="btn btn-block btn-primary"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddFriends;
