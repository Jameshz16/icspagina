"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

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
        <h1 className="display-4 fw-bold">Expert Home Restoration & Repair</h1>
        
        <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Estimate</Link>
      </div>
    </div>
  );
};

import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const servicesRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (whyChooseUsRef.current) observer.observe(whyChooseUsRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (whyChooseUsRef.current) observer.unobserve(whyChooseUsRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (ctaRef.current) observer.unobserve(ctaRef.current);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <div ref={servicesRef} className="fade-in-section">
        <ServicesSection />
      </div>
      <div ref={whyChooseUsRef} className="fade-in-section">
        <WhyChooseUsSection />
      </div>
      <div ref={testimonialsRef} className="fade-in-section">
        <TestimonialsSection />
      </div>
      <div ref={ctaRef} className="fade-in-section">
        <CTASection />
      </div>
    </>
  );
}