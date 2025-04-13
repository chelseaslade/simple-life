import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className="Header">
          <header className="Banner">
              <h1>SIMple Life</h1>
              <p>A simple life simulation game!</p>
              <nav className="nav">
                <ul className="navList">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/social">Social</Link></li>
                </ul>
              </nav>
          </header>
        </div>
      </>
    );
  };
  
  export default Header;