import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo and Description */}
          <div className="col-md-3 mb-4">
            <Link href="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
              <img src="/assets/logo.png" alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
              <strong>Innovative custom services</strong>
            </Link>
            <p className="text-white">Your trusted partner for home restoration services.</p>
          </div>

          {/* Column 2: Menu Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link href="/" className="nav-link p-0 text-white">Home</Link></li>
              <li className="nav-item mb-2"><Link href="/services" className="nav-link p-0 text-white">Services</Link></li>
              <li className="nav-item mb-2"><Link href="/about" className="nav-link p-0 text-white">About</Link></li>
              <li className="nav-item mb-2"><Link href="/contact" className="nav-link p-0 text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><span className="p-0 text-white">123 Main Street, Anytown, USA</span></li>
              <li className="nav-item mb-2"><span className="p-0 text-white">Phone: (123) 456-7890</span></li>
              <li className="nav-item mb-2"><span className="p-0 text-white">Email: info@example.com</span></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="col-md-3 mb-4">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3">
          <p>&copy; {currentYear} Innovative custom services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;