import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

// accept values in props and apply destructuring.
// instead of using (props.name)
// we can use ({name}) as destructuring of props passed from parent.
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-groups">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={classnames("form-control form-control-lg ", {
          "is-invalid ": error
        })}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.protoTyeps = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
