import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-primary fixed-top customNavbar"  id="customNavbar">
      <div className="container">
        <a className="navbar-brand" href="/">
        <img src="../../src/img/logo.png" width="45" height="45" alt="nie działa" />
        </a>
        <Link className="navbar-brand" to="/">Projekt BOB</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Rejestracja</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/czat">Czat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Logowanie</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;