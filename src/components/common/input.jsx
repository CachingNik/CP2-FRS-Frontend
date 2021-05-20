import React from "react";

const Input = ({ name, label, secondaryLabel, error, ...rest }) => {
  return (
    <div className="input-group mb-3">
      {label !== "" && <span className="input-group-text">{label}</span>}
      {secondaryLabel !== "" && (
        <span className="input-group-text">{secondaryLabel}</span>
      )}
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
