import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/js/src/dropdown";

const NavLinkDropdown = ({ label, items, children }) => {
  return (
    <div className="nav-item dropdown">
      <span
        className="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
        {label}
      </span>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="dropdown-item" to={item.path}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

NavLinkDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default NavLinkDropdown;
