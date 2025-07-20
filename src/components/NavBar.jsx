import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-left">
        Superhero Explorer
      </Link>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/auth">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
