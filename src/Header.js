import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  // javascript runnable code should be outside of return(<JSX/>)
  const { branding } = props;
  return (
    <div className="nav navbar navbar-expand-sm navbar-dark bg-success mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div className="Navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/add" className="nav-link">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.defaultProps = {
  branding: "Default App name"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const myStyle = { color: "blue", fontSize: "50px" };

export default Header;
