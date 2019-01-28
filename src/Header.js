import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  // javascript runnable code should be outside of return(<JSX/>)
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
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
