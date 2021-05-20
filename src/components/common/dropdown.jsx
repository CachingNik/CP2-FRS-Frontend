import React from "react";

const Dropdown = ({
  label,
  items,
  textProperty,
  extraProperty,
  keyProperty,
  ...rest
}) => {
  return (
    <select className="form-select" {...rest}>
      <option value="" disabled>
        {label}
      </option>
      {items.map((item) => (
        <option key={item[keyProperty]} value={item[keyProperty]}>
          {item[textProperty]}
          {item[extraProperty] && ", " + item[extraProperty]}
        </option>
      ))}
    </select>
  );
};

Dropdown.defaultProps = {
  textProperty: "name",
  extraProperty: "number",
  keyProperty: "_id",
};

export default Dropdown;
