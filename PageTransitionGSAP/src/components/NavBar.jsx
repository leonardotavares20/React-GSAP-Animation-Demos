import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to={"/"}>Leonardo Silva</Link>
      </div>
      <div className="links">
        <div className="nav-item">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="nav-item">
          <Link to={"/about"}>Projects</Link>
        </div>
        <div className="nav-item">
          <Link to={"/contact"}>Info</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
