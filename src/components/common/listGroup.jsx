import React from "react";

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

export default ListGroup;
