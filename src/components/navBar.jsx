import React from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/js/src/collapse";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          <i className="fa fa-plane me-1" aria-hidden="true"></i>
          FRS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/flights">
              Flights
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
            {!user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/profile">
                  <i
                    class={`fa fa-user${user.isAdmin ? "-secret" : ""} me-1`}
                    aria-hidden="true"
                  ></i>
                  {user.name}
                </NavLink>
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
