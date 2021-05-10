import React from "react";

const Dropdown = ({ label, items, onSelect, ...rest }) => {
  return (
    <select className="custom-select" onChange={onSelect} {...rest}>
      <option value="" disabled>
        {label}
      </option>
      {items.map((item) => (
        <option value={item._id} key={item._id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
