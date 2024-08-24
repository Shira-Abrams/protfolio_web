import React from 'react';
import '../styles/Header.scss'; // Import header styles

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="typing-animation">Shira Abrams</h1>
        <p className="typing-animation" style={{ animationDelay: '2s' }}>Full Stack Developer</p>
      </div>
    </header>
  );
};

export default Header;
