import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="/assets/Asset 16@4x.png" alt="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="/orderonline">Order Online</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
