import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const navLinkStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "normal",
    textDecoration: isActive ? "none" : "underline",
  };
};

function Navbar() {
  const auth = useAuth();
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
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>

      {!auth.user && (
        <NavLink style={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
