import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  const navStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#387ed1" : "#424242",
  });

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom fixed-top">
      <div className="container">

        {/* Zerodha Logo */}
        <Link className="navbar-brand" to="/homepage">
          <img
            src="/media/images/logo.svg"
            alt="Zerodha"
            style={{ width: "130px" }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-3">

            {/* Signup */}
            <li className="nav-item mx-2 fs-6">
              <NavLink
                className="nav-link"
                to="/signup"
                style={navStyle}
              >
                Signup
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item mx-2 fs-6">
              <NavLink
                className="nav-link"
                to="/about"
                style={navStyle}
              >
                About
              </NavLink>
            </li>

            {/* Products */}
            <li className="nav-item mx-2 fs-6">
              <NavLink
                className="nav-link"
                to="/product"
                style={navStyle}
              >
                Products
              </NavLink>
            </li>

            {/* Pricing */}
            <li className="nav-item mx-2 fs-6">
              <NavLink
                className="nav-link"
                to="/pricing"
                style={navStyle}
              >
                Pricing
              </NavLink>
            </li>

            {/* Support */}
            <li className="nav-item mx-4 fs-6">
              <NavLink
                className="nav-link"
                to="/support"
                style={navStyle}
              >
                Support
              </NavLink>
            </li>

            {/* Menu Icon */}
            <li className="nav-item mx-4 mt-2">
              <i
                className="fa-solid fa-bars text-muted"
                style={{ transform: "scaleX(1.5)" }}
              ></i>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;