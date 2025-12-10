import Button from '../button/button.jsx'
import "./header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <img src="/logo1.png" alt="Always Hotel logo" height="70"/>
            </Link>
            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/rooms">Rooms</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/restaurant">Restaurant</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="book-now-desktop">
                <Button label="Book Now"/>
            </div>
        </nav>
    )
}

export default Header