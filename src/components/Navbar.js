import React from "react";
import { NavLink } from "react-router-dom";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

function Navbar() {
  return (
    <nav className="primary">
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/product">
        Product
      </NavLink>
    </nav>
  );
}

export default Navbar;
