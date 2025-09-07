
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <p>&copy; {currentYear} Innovative custom services. All Rights Reserved.</p>
        <p>Your trusted partner for home restoration services.</p>
      </div>
    </footer>
  );
};

export default Footer;
