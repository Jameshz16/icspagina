"use client";

import React from 'react';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import TeamSection from '@/components/TeamSection';


const HeroSection = () => {
  const heroStyle = {
    background: 'linear-gradient(rgba(0, 0, 50, 0.5), rgba(0, 0, 50, 0.5)), url(/assets/openpage.jpg) no-repeat center / cover',
    color: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div style={heroStyle} className="text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Innovative Custom Services</h1>
        <p className="lead">Your Trusted Partner in Construction</p>
        <Link href="/contact" className="btn btn-primary btn-lg">Contact</Link>
      </div>
    </div>
  );
};

const CallToActionSection = () => {
  const sectionStyle = {
    backgroundColor: '#007bff', // A nice blue color
    color: 'white',
    padding: '5rem 0',
  };

  return (
    <section style={sectionStyle} className="text-center">
      <div className="container">
        <h2 className="fw-bold">IF YOU CAN ENVISION IT, THEN WE CAN BUILD IT!</h2>
        <p className="lead my-4">TELL US MORE ABOUT YOUR PROJECT</p>
        <Link href="/contact" className="btn btn-light btn-lg">Contact</Link>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CallToActionSection />
      <TestimonialsSection />
      <TeamSection />
    </>
  );
}