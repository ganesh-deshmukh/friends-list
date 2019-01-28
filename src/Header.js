import React from "react";

const Header = props => {
  // javascript runnable code should be outside of return(<JSX/>)
  const { branding } = props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

export default Header;
