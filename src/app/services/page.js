"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWrench, FaTools, FaPaintBrush, FaShieldAlt, FaBuilding, FaPlus, FaSwimmingPool, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Concrete Restoration',
    description: 'High-quality restoration for durable and long-lasting concrete structures.',
    details: 'We specialize in repairing cracks, spalling, and other damage to restore the integrity and appearance of concrete surfaces using advanced techniques.',
    icon: FaWrench,
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Post-Tension Repair',
    description: 'Specialized repair and maintenance for post-tensioned concrete systems.',
    details: 'Our experts provide comprehensive services including tendon repair, grouting, and corrosion protection to ensure structural safety and longevity.',
    icon: FaTools,
    image: '/assets/post-tencion.png'
  },

  {
    title: 'Professional Painting' ,
    description: 'Interior and exterior painting services for a fresh, new look.' ,
    details: 'We use high-quality paints and finishes with meticulous surface preparation to transform your space with flawless results.',
    icon: FaPaintBrush ,
    image: '/assets/painting.jpg'
  },
  {
    title: 'Waterproofing Solutions',
    description: 'Protect your property from water damage with expert solutions.',
    details: 'Comprehensive waterproofing for basements, foundations, and roofs with membrane application and drainage improvements.',
    icon: FaShieldAlt,
    image: '/assets/waterproofing.jpg'
  },
  {
    title: 'Shell Construction',
    description: 'Comprehensive shell construction for new buildings and structures.',
    details: 'We build the core structure including foundation work, framing, roofing, and exterior sheathing with precision and efficiency.',
    icon: FaBuilding,
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Home Additions',
    description: 'Expand your space with seamless and structurally sound additions.',
    details: 'From design consultation to completion, we handle every aspect of your expansion project with seamless integration.',
    icon: FaPlus,
    image: '/assets/additions.jpeg'
  },
  {
    title: 'Pool Services',
    description: 'Expert pool repair, Diamond Brite plaster, refinishing, and new construction.',
    details: 'Complete pool services including Diamond Brite plaster application, tile updates, equipment upgrades, and full refinishing.',
    icon: FaSwimmingPool,
    image: '/assets/pool.jpg'
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white mb-4">
                Our Comprehensive Services
              </h1>
              <p className="lead text-white-50 mb-0">
                Delivering innovative construction solutions with precision, quality, and unmatched expertise across South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-5 services-grid-section">
        <div className="container">
          <div className="row g-4">
            {servicesData.map((service, index) => (
              <div className="col-xl-4 col-lg-6 mb-5" key={index} style={{'--animation-order': index}}>
                <div className="service-card-enhanced h-100">
                  <div className="service-image-wrapper-enhanced">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="service-image-enhanced"
                    />
                    <div className="service-gradient-overlay"></div>
                    <div className="service-icon-float">
                      <service.icon className="service-icon-large" />
                    </div>
                  </div>
                  <div className="service-content-enhanced">
                    <div className="service-header">
                      <h3 className="service-title-enhanced">{service.title}</h3>
                      <div className="service-underline"></div>
                    </div>
                    <p className="service-description-enhanced">{service.description}</p>
                    <p className="service-details-enhanced">{service.details}</p>
                    <div className="service-footer">
                      <Link href="/contact" className="service-btn-enhanced">
                        <span>Learn More</span>
                        <FaArrowRight className="btn-arrow" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-white-50 mb-0">
                Contact us today for a free consultation and discover how we can bring your vision to life.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/contact" className="btn btn-light btn-lg">
                Get Free Consultation
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
                <h5>Visit Us</h5>
                <p className="mb-0">South Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .services-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/construction-hero.jpg') center/cover;
          opacity: 0.3;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 51, 102, 0.8);
          z-index: 1;
        }

        .z-index-1 {
          z-index: 1;
        }

        .services-grid-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .service-card-enhanced {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          position: relative;
        }

        .service-card-enhanced:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .service-card-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .service-card-enhanced:hover::before {
          opacity: 0.05;
        }

        .service-image-wrapper-enhanced {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .service-image-enhanced {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card-enhanced:hover .service-image-enhanced {
          transform: scale(1.1);
        }

        .service-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.8) 0%, rgba(0, 102, 204, 0.8) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .service-card-enhanced:hover .service-gradient-overlay {
          opacity: 1;
        }

        .service-icon-float {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .service-card-enhanced:hover .service-icon-float {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.2);
        }

        .service-icon-large {
          font-size: 4rem;
          color: white;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }

        .service-content-enhanced {
          padding: 2.5rem;
          position: relative;
          z-index: 4;
        }

        .service-header {
          margin-bottom: 1.5rem;
        }

        .service-title-enhanced {
          color: var(--primary-blue);
          font-weight: 800;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .service-card-enhanced:hover .service-title-enhanced {
          color: var(--accent-blue);
        }

        .service-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-blue) 0%, var(--primary-blue) 100%);
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        .service-card-enhanced:hover .service-underline {
          width: 100px;
        }

        .service-description-enhanced {
          color: #495057;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .service-details-enhanced {
          color: #6c757d;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .service-footer {
          text-align: center;
        }

        .service-btn-enhanced {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--primary-blue) 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
          border: none;
          position: relative;
          overflow: hidden;
        }

        .service-btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .service-btn-enhanced:hover::before {
          left: 100%;
        }

        .service-btn-enhanced:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.4);
        }

        .btn-arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .service-btn-enhanced:hover .btn-arrow {
          transform: translateX(5px);
        }

        .services-cta {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
        }

        .contact-item {
          padding: 2.5rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          height: 100%;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 2.5rem;
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

        .service-card-enhanced {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: calc(var(--animation-order) * 0.1s);
        }

        @media (max-width: 768px) {
          .services-hero {
            padding: 80px 0 60px;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .service-image-wrapper-enhanced {
            height: 240px;
          }
          
          .service-content-enhanced {
            padding: 2rem;
          }
          
          .service-title-enhanced {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 576px) {
          .service-image-wrapper-enhanced {
            height: 200px;
          }
          
          .service-content-enhanced {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;