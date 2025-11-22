"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaAward, 
  FaShieldAlt, 
  FaUsers, 
  FaTools,
  FaCheckCircle,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';

const AboutPage = () => {
  const values = [
    {
      icon: FaAward,
      title: "Excellence",
      description: "We deliver superior craftsmanship in every project, setting the standard for quality in the industry."
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "Transparent communication and honest business practices are the foundation of our relationships."
    },
    {
      icon: FaUsers,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: FaTools,
      title: "Innovation",
      description: "Using cutting-edge techniques and premium materials like Diamond Brite for lasting results."
    }
  ];

  const certifications = [
    "Licensed Contractor CBC #1250136",
    "Fully Insured & Bonded",
    "25+ Years of Experience",
    "Premium Materials Guarantee"
  ];

  return (
    <div className="main-content">
      {/* Hero Section */}
      <section className="bg-primary-blue text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About Innovative Custom Services</h1>
              <p className="lead mb-4">
                With over 25 years of experience, we are your trusted partner for expert restoration 
                and luxury custom pools in Boca Raton and throughout South Florida.
              </p>
              <div className="d-flex gap-3">
                <Link href="/contact" className="cta-button">
                  Get Free Estimate
                </Link>
                <Link href="tel:561-913-8055" className="btn btn-outline-light">
                  <FaPhone className="me-2" />
                  Call Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{
                background: 'url(/assets/concrete.jpg) center/cover',
                height: '300px',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-light-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <h2 className="section-title text-start">Our Mission</h2>
              <p className="lead mb-4">
                To transform properties with exceptional craftsmanship, innovative solutions, 
                and unwavering dedication to customer satisfaction.
              </p>
              <p className="mb-4">
                We understand that your property is more than just a building—it&apos;s your home, 
                your investment, and your legacy. That&apos;s why we approach every project with the 
                care and attention it deserves.
              </p>
              <div className="row">
                {certifications.map((cert, index) => (
                  <div className="col-12 mb-3" key={index}>
                    <div className="d-flex align-items-center">
                      <FaCheckCircle className="text-accent-blue me-3" />
                      <span>{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div style={{
                background: 'url(/assets/painting.jpg) center/cover',
                height: '400px',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Core Values</h2>
            <p className="lead text-muted">
              The principles that guide everything we do
            </p>
          </div>
          <div className="row g-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <div className="text-center p-4">
                    <div className="mb-4">
                      <IconComponent size={48} className="text-accent-blue" />
                    </div>
                    <h5 className="fw-bold mb-3">{value.title}</h5>
                    <p className="text-muted">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section bg-light-gray">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What We Do</h2>
            <p className="lead text-muted">
              From concrete restoration to luxury custom pools, we deliver excellence across all our services
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div style={{
                      background: 'url(/assets/concrete.jpg) center/cover',
                      height: '150px',
                      borderRadius: '8px'
                    }} />
                  </div>
                  <h5 className="fw-bold">Concrete Restoration</h5>
                  <p className="text-muted">
                    Expert repair and restoration of concrete structures to original strength and appearance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div style={{
                      background: 'url(/assets/pool.jpg) center/cover',
                      height: '150px',
                      borderRadius: '8px'
                    }} />
                  </div>
                  <h5 className="fw-bold">Custom Pools</h5>
                  <p className="text-muted">
                    Luxury pool construction and renovation with Diamond Brite finishes and premium materials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <div style={{
                      background: 'url(/assets/Waterproofing.jpg) center/cover',
                      height: '150px',
                      borderRadius: '8px'
                    }} />
                  </div>
                  <h5 className="fw-bold">Waterproofing</h5>
                  <p className="text-muted">
                    Comprehensive waterproofing solutions to protect your property from water damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="mb-3">Ready to Start Your Project?</h2>
          <p className="lead mb-4">
            Contact us today for a free consultation and estimate
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href="/contact" className="btn btn-light btn-lg">
              Get Free Estimate
            </Link>
            <a href="tel:561-913-8055" className="btn btn-outline-light btn-lg">
              <FaPhone className="me-2" />
              561-913-8055
            </a>
            <a href="mailto:chett@innovativecustomservices.com" className="btn btn-outline-light btn-lg">
              <FaEnvelope className="me-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
