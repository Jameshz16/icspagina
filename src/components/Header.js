
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <img src="/assets/logo.png" alt="Company Logo" style={{ height: '40px', marginRight: '10px' }} />
            <strong className="ms-2">Innovative custom services</strong>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="btn btn-primary">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
