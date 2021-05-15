import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <ul className="list-group mb-1">
      {items.map((item, index) => (
        <li
          key={index}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          onClick={() => onItemSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default ListGroup;
