import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-link" to="/">
          Home
        </Link>
        <Link className="main-nav-link" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}
