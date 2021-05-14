import React from "react";

const Dropdown = ({ label, items, textProperty, valueProperty, ...rest }) => {
  return (
    <select className="form-select" {...rest}>
      <option value="" disabled>
        {label}
      </option>
      {items.map((item) => (
        <option key={item[valueProperty]} value={item[valueProperty]}>
          {item[textProperty]}
        </option>
      ))}
    </select>
  );
};

Dropdown.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default Dropdown;
