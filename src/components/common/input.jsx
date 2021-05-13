import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{label}</span>
      <input
        {...rest}
        name={name}
        id={name}
        className={`form-control ${error && "is-invalid"}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
