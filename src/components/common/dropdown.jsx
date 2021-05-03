import React from "react";

const Dropdown = ({ label }) => {
  return (
    <select className="custom-select" defaultValue={label}>
      <option disabled>{label}</option>
    </select>
  );
};

export default Dropdown;
