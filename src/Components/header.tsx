import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='Header-container'>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/Images/HomeButton.jpg" alt="Home" />
          </Link>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/news" onClick={toggleMenu}>News/Events</Link></li>
          <li><Link to="/AboutMe" onClick={toggleMenu}>About Me</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
