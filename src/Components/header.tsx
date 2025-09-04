import { useState } from 'react';
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
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-left">
            <li><Link to="/music" onClick={toggleMenu}>Music</Link></li>
            <li><Link to="/news" onClick={toggleMenu}>News</Link></li>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="/Images/HomeButton.jpg" alt="Home" />
            </Link>
          </div>
          <div className="nav-right">
            <li><Link to="/AboutMe" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
