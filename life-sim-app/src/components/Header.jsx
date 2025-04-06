import React from 'react';

const Header = () => {
    return (
      <>
        <div className="Header">
          <header className="Banner">
              <h1>SIMple Life</h1>
              <p>A simple life simulation game!</p>
              <nav className="nav">
                <ul className="navList">
                  <li><a href="/">Home</a></li>
                  <li><a href="/About">About</a></li>
                  <li><a href="/Social">Social</a></li>
                </ul>
              </nav>
          </header>
        </div>
      </>
    );
  };
  
  export default Header;