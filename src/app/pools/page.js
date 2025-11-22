"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSwimmingPool, FaTools, FaPaintBrush, FaShieldAlt, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const poolServices = [
  {
    title: 'Diamond Brite Plaster',
    description: 'Premium pool surface finish that combines beauty with durability.',
    details: 'Our Diamond Brite plaster application provides a stunning, long-lasting finish that resists staining and etching while maintaining vibrant color for years to come.',
    icon: FaSwimmingPool,
    image: '/assets/pool.jpg'
  },
  {
    title: 'Pool Refinishing',
    description: 'Complete pool resurfacing to restore beauty and functionality.',
    details: 'We specialize in complete pool refinishing including surface preparation, plaster removal, and application of new premium finishes.',
    icon: FaTools,
    image: '/assets/pool.jpg'
  },
  {
    title: 'Tile & Coping',
    description: 'Expert tile and coping installation for a perfect pool edge.',
    details: 'Professional tile and coping work that enhances both aesthetics and functionality while ensuring proper water drainage and edge protection.',
    icon: FaPaintBrush,
    image: '/assets/pool.jpg'
  },
  {
    title: 'Equipment Upgrades',
    description: 'Modern pool equipment for better efficiency and performance.',
    details: 'Upgrade your pool with energy-efficient pumps, advanced filtration systems, LED lighting, and smart automation controls.',
    icon: FaShieldAlt,
    image: '/assets/pool.jpg'
  }
];

const poolFeatures = [
  'Diamond Brite plaster application',
  'Complete pool resurfacing',
  'Tile and coping installation',
  'Equipment upgrades and automation',
  'Leak detection and repair',
  'Structural crack repair',
  'Pool deck renovation',
  'New pool construction'
];

const PoolsPage = () => {
  return (
    <div className="pools-page">
      {/* Hero Section */}
      <section className="pools-hero position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white mb-4">
                Pool Services & Construction
              </h1>
              <p className="lead text-white-50 mb-0">
                Transform your backyard with our expert pool services including Diamond Brite plaster, refinishing, and new construction across South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 pools-services-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fw-bold mb-4" style={{color: 'var(--primary-blue)'}}>
                Our Pool Services
              </h2>
              <p className="lead text-muted">
                From Diamond Brite plaster application to complete pool construction, we deliver exceptional quality and craftsmanship for all your pool needs.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {poolServices.map((service, index) => (
              <div className="col-lg-6 mb-4" key={index} style={{'--animation-order': index}}>
                <div className="pool-service-card h-100">
                  <div className="pool-service-image-wrapper">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="pool-service-image"
                    />
                    <div className="pool-service-overlay">
                      <service.icon className="pool-service-icon" />
                    </div>
                  </div>
                  <div className="pool-service-content">
                    <h3 className="pool-service-title">{service.title}</h3>
                    <p className="pool-service-description">{service.description}</p>
                    <p className="pool-service-details">{service.details}</p>
                    <Link href="/contact" className="pool-service-link">
                      Get Quote <FaArrowRight className="ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 pools-features-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4" style={{color: 'var(--primary-blue)'}}>
                Why Choose Our Pool Services?
              </h2>
              <p className="lead text-muted mb-4">
                With years of experience in pool construction and renovation, we bring expertise, quality materials, and attention to detail to every project.
              </p>
              <div className="row">
                {poolFeatures.map((feature, index) => (
                  <div className="col-md-6 mb-3" key={index}>
                    <div className="feature-item d-flex align-items-center">
                      <FaCheckCircle className="feature-icon me-3" />
                      <span className="feature-text">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pools-feature-image-wrapper">
                <Image
                  src="/assets/pool.jpg"
                  alt="Pool Construction"
                  fill
                  className="pools-feature-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pools-cta py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-white mb-3">
                Ready to Build Your Dream Pool?
              </h2>
              <p className="text-white-50 mb-0">
                Contact us today for a free consultation and quote for your pool project.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/contact" className="btn btn-light btn-lg">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaPhone className="contact-icon mb-3" />
                <h5>Call Us</h5>
                <p className="mb-0">(561) 913-8055</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaEnvelope className="contact-icon mb-3" />
                <h5>Email Us</h5>
                <p className="mb-0">chett@innovativecustomservices.com</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon mb-3" />
                <h5>Service Area</h5>
                <p className="mb-0">South Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .pools-hero {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .pools-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/pool.jpg') center/cover;
          opacity: 0.3;
        }

        .pools-services-section {
          padding: 5rem 0;
          background: white;
        }

        .pools-features-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .pool-service-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .pool-service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .pool-service-image-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        .pool-service-image {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .pool-service-card:hover .pool-service-image {
          transform: scale(1.05);
        }

        .pool-service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.8) 0%, rgba(0, 102, 204, 0.8) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pool-service-card:hover .pool-service-overlay {
          opacity: 1;
        }

        .pool-service-icon {
          font-size: 3rem;
          color: white;
        }

        .pool-service-content {
          padding: 2rem;
        }

        .pool-service-title {
          color: var(--primary-blue);
          font-weight: 700;
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .pool-service-description {
          color: #495057;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .pool-service-details {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .pool-service-link {
          color: var(--accent-blue);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: color 0.3s ease;
        }

        .pool-service-link:hover {
          color: var(--primary-blue);
        }

        .pools-feature-image-wrapper {
          position: relative;
          height: 400px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .pools-feature-image {
          object-fit: cover;
        }

        .feature-item {
          padding: 0.75rem 0;
        }

        .feature-icon {
          color: var(--accent-blue);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature-text {
          color: #495057;
          font-weight: 500;
        }

        .pools-cta {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
        }

        .contact-item {
          padding: 2rem;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          height: 100%;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 2rem;
          color: var(--accent-blue);
          margin-bottom: 1rem;
        }

        .text-white-50 {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pool-service-card {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: calc(var(--animation-order) * 0.15s);
        }

        @media (max-width: 768px) {
          .pools-hero {
            padding: 80px 0 60px;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .pools-feature-image-wrapper {
            height: 300px;
          }
          
          .pool-service-image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default PoolsPage;