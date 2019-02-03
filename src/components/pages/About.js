import React from "react";

export default props => {
  return (
    <div>
      <p className="display-4">{props.match.params.id}</p>
      <h1 className="display-4">About Friends-List.</h1>
      <p className="lead">Simple Webapp to add friends contact details</p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  );
};
