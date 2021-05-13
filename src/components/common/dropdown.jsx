import React from "react";

const Dropdown = ({ label, items, ...rest }) => {
  return (
    <select className="form-select" {...rest}>
      <option value="" disabled>
        {label}
      </option>
      {items.map((item) => (
        <option key={item._id} value={item._id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
