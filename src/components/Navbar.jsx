import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="nav-logo"
          onClick={() => setIsOpen(false)}
        >
          Your Name
        </Link>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li className="nav-item">
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;