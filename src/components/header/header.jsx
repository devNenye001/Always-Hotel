import Button from "../button/button.jsx";
import "./header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <Link to="/" onClick={closeMenu} aria-label="Always Hotel Minna - Home">
          <img
            src="/logo1.png"
            alt="Always Hotel Minna Logo - Best Hotel in Minna"
            height="70"
          />
        </Link>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`navlinks ${isMenuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/rooms" onClick={closeMenu}>
            Rooms
          </NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/restaurant" onClick={closeMenu}>
            Restaurant
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
        <div className="book-now-desktop">
          <Link to="/rooms">
            <Button label="Book Now" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;