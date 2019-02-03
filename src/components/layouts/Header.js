import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  // javascript runnable code should be outside of return(<JSX/>)
  const { branding } = props;
  return (
    <div className="nav navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div className="Navbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <i className="fas fa-plus" /> Add-Friend
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> About
              </Link>
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

export default Header;
