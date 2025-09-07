import React from 'react';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

const HeroSection = () => {
  const heroStyle = {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://via.placeholder.com/1920x1080.png?text=Home+Repair+Service)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '10rem 0',
  };

  return (
    <div style={heroStyle} className="text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Expert Home Restoration & Repair</h1>
        
        <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Estimate</Link>
      </div>
    </div>
  );
};

import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}