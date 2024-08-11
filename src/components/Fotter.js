import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Shira Abrams. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
