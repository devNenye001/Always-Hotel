
import Button from '../button/button.jsx'
import "./header.css";
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <img src="/logo1.png" alt="Always Hotel logo" height="70"/>
            <button className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navlinks ${isMenuOpen ? 'active' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Rooms</a>
                <a href="#">Gallery</a>
                <a href="#">Restaurant</a>
                <a href="#">Contact</a>
            </div>
            <div className="book-now-desktop">
                <Button label="Book Now"/>
            </div>
        </nav>
    )
}

export default Header