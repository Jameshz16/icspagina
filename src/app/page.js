"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">Innovative Custom Services</h1>
            <h2 className="h3 fw-semibold mb-4 text-white-50">Expert Restoration & Luxury Custom Pools</h2>
            <p className="lead mb-4">Licensed Contractor • CBC #1250136</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link href="/contact" className="cta-button px-4 py-3">
                Get Free Estimate
              </Link>
              <Link href="/services" className="btn btn-outline-light px-4 py-3">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="section bg-light-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title text-start">About ICS</h2>
            <p className="lead mb-4">
              With years of experience in construction and pool services, we deliver exceptional results 
              that transform properties and exceed expectations.
            </p>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle-fill text-accent-orange me-2"></i>
                  <strong>Licensed & Insured</strong>
                </div>
                <p className="small text-muted">CBC #1250136</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-award-fill text-accent-orange me-2"></i>
                  <strong>Premium Materials</strong>
                </div>
                <p className="small text-muted">Diamond Brite & More</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-clock-fill text-accent-orange me-2"></i>
                  <strong>Timely Completion</strong>
                </div>
                <p className="small text-muted">On Schedule, Every Time</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-shield-check-fill text-accent-orange me-2"></i>
                  <strong>Satisfaction Guaranteed</strong>
                </div>
                <p className="small text-muted">Quality You Can Trust</p>
              </div>
            </div>
            <Link href="/about" className="btn btn-outline-primary mt-3">
              Learn More About Us
            </Link>
          </div>
          <div className="col-lg-6">
            <div style={{
              position: 'relative',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}>
              <Image
                src="/assets/concrete.jpg"
                alt="Professional concrete restoration in progress"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MidPageCTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-3">Ready to Transform Your Property?</h2>
            <p className="lead mb-4">Get Your Free Professional Estimate Today</p>
            <Link href="/contact" className="btn btn-light btn-lg px-5 py-3">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const PoolsSection = () => {
  return (
    <section id="pools" className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title text-start">Pool Repair & Construction</h2>
            <p className="lead mb-4">
              Transform your backyard with our expert pool services. From Diamond Brite plaster 
              to complete new construction, we create stunning aquatic retreats.
            </p>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-droplet-fill text-accent-orange me-2"></i>
                  <strong>Diamond Brite Plaster</strong>
                </div>
                <p className="small text-muted">Premium Pool Finishes</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-tools text-accent-orange me-2"></i>
                  <strong>Complete Refinishing</strong>
                </div>
                <p className="small text-muted">Tile, Coping & Deck</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-house-fill text-accent-orange me-2"></i>
                  <strong>New Construction</strong>
                </div>
                <p className="small text-muted">Design to Completion</p>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-gear-fill text-accent-orange me-2"></i>
                  <strong>Equipment Upgrades</strong>
                </div>
                <p className="small text-muted">Pumps, Filters, Lighting</p>
              </div>
            </div>
            <Link href="/contact" className="cta-button mt-3">
              Request Pool Consultation
            </Link>
          </div>
          <div className="col-lg-6">
            <div style={{
              position: 'relative',
              height: '350px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
            }}>
              <Image
                src="/assets/pool.jpg"
                alt="Luxury custom pool with Diamond Brite finish"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PoolsSection />
      <MidPageCTA />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
}