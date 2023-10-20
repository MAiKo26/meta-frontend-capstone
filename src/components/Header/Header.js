import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="headercontainer">
      <div className="headercontainer-content">
        <h1>Little Lemon Restaurant</h1> <h2>Chicago</h2>{" "}
        <p>
          We are a family owned Mediterranean restaurant, serving the best
          gyros!
        </p>
        <a id="rat" href="/booking">
          Reserve a Table
        </a>
      </div>
      <img className="br1" src="/assets/br1.png" alt="br1" />
    </header>
  );
}

export default Header;
