import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './navbar.css';

function Navbar() {
const [showMenu,SetMenu] = useState(false)
const toggleMenue= () =>{
  SetMenu(!showMenu)
  console.log("clicked")
}
  return (
  <header>
      <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
      
          <span></span>
        </Link>
        
      </div>
  <div className={`${showMenu ? 'layer_links show' : "layer_links"}`}>
  <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/services">Services <FontAwesomeIcon icon={faAngleDown} /></Link>
        <Link to="/products">Products <FontAwesomeIcon icon={faAngleDown} /></Link>
        <Link to="/blog">Blog</Link>
      </div>
  </div>
      <div className="navbar__actions">
        <Link to="/login">Login</Link>
        <Link to="/about" className="btn-learn-more">Learn More</Link>
        <div className="navbar__menu" onClick={toggleMenue} >
    
         {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
      </div>
    
    </nav>
  </header>
  );
}

export default Navbar;