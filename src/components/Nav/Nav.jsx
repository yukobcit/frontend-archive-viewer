import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">TwitchHive</Link>
      </div>
      <a className={`nav-button ${isMenuOpen ? "active" : ""}`} href="#" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <nav className={`nav-wrap ${isMenuOpen ? "open" : "close"}`}>
        <ul className="nav">
          <li>
            <Link to="/">Followed Creators' Hive</Link>
          </li>
          <li>
            <Link to="/showcase">User's Showcase</Link>
          </li>
          <li>
            <Link to="/">Credits</Link>
          </li>
          <li>
            <Link to="/">Donation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
