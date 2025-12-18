import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-5">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="d-flex align-items-center text-decoration-none mb-3">
              <Image src="/assets/logo.png" alt="ICS Logo" width={50} height={50} className="me-3" />
              <span className="fw-bold fs-4 text-white">ICS</span>
            </Link>
            <p className={styles.description}>
              Innovative Custom Services. delivering excellence in restoration, construction, and pool services across South Florida. Licensed & Insured.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIconLink} aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className={styles.socialIconLink} aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className={styles.socialIconLink} aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.heading}>Quick Links</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/" className={styles.link}>Home</Link></li>
              <li className={styles.linkItem}><Link href="/about" className={styles.link}>About Us</Link></li>
              <li className={styles.linkItem}><Link href="/services" className={styles.link}>Services</Link></li>
              <li className={styles.linkItem}><Link href="/projects" className={styles.link}>Projects</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h5 className={styles.heading}>Services</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><Link href="/services" className={styles.link}>Concrete Restoration</Link></li>
              <li className={styles.linkItem}><Link href="/pools" className={styles.link}>Custom Pools</Link></li>
              <li className={styles.linkItem}><Link href="/services" className={styles.link}>Waterproofing</Link></li>
              <li className={styles.linkItem}><Link href="/services" className={styles.link}>Painting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className={styles.heading}>Contact Us</h5>
            <div className={styles.contactInfo}>
              <i className={`bi bi-geo-alt-fill ${styles.contactIcon}`}></i>
              <div>
                21218 St Andrews Blvd # 727<br />
                Boca Raton, FL 33433
              </div>
            </div>
            <div className={styles.contactInfo}>
              <i className={`bi bi-telephone-fill ${styles.contactIcon}`}></i>
              <div>(561) 913-8055</div>
            </div>
            <div className={styles.contactInfo}>
              <i className={`bi bi-envelope-fill ${styles.contactIcon}`}></i>
              <div>chett@innovativecustomservices.com</div>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              &copy; {currentYear} Innovative Custom Services. All Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <span className="small">CBC #1250136</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;