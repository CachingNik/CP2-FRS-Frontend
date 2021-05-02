import React from "react";

const ToggleButton = ({ mode, label, ...rest }) => {
  return (
    <label className={`btn btn-secondary ${mode && "active"}`}>
      <input type="radio" {...rest} />
      {label}
    </label>
  );
};

export default ToggleButton;
