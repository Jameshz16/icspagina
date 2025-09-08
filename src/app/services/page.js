"use client";

import React from 'react';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Concrete Restoration',
    description: 'High-quality restoration for durable and long-lasting concrete structures. We specialize in repairing cracks, spalling, and other damage to restore the integrity and appearance of concrete surfaces.',
    details: 'Our concrete restoration services include crack injection, surface preparation, protective coatings, and structural repairs. We use advanced techniques and materials to ensure long-lasting results for both commercial and residential properties.'
  },
  {
    title: 'Post-Tension Repair',
    description: 'Specialized repair and maintenance for post-tensioned concrete systems. Our experts ensure the safety and longevity of your structures.',
    details: 'We provide comprehensive post-tension repair services, including tendon repair and replacement, grouting, and corrosion protection. Our team is highly experienced in working with complex post-tension systems to maintain structural integrity.'
  },
  {
    title: 'Painting',
    description: 'Professional interior and exterior painting services for a fresh, new look. We use high-quality paints and finishes to transform your space.',
    details: 'Our painting services cover everything from meticulous surface preparation to the final coat. We offer a wide range of colors and finishes, and our skilled painters ensure a smooth, even application for a flawless result.'
  },
  {
    title: 'Waterproofing',
    description: 'Protect your property from water damage with our expert waterproofing solutions. We offer comprehensive solutions for basements, foundations, and roofs.',
    details: 'Our waterproofing solutions include membrane application, sealant installation, and drainage system improvements. We identify and address the root causes of water intrusion to provide effective and long-lasting protection for your property.'
  },
  {
    title: 'Shell Construction',
    description: 'Comprehensive shell construction services for new buildings and structures. We build the core structure of your project with precision and efficiency.',
    details: 'Our shell construction services encompass foundation work, framing, roofing, and exterior sheathing. We work closely with architects and engineers to ensure that the structural integrity and design specifications of your building are met.'
  },
  {
    title: 'Additions',
    description: 'Expand your space with our seamless and structurally sound home additions. From concept to completion, we handle every aspect of your expansion project.',
    details: 'Our home addition services include design consultation, permit acquisition, construction, and finishing. Whether you need an extra bedroom, a larger living area, or a new office space, we ensure that your addition blends seamlessly with your existing home.'
  }
];

const ServicesPage = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-5">Our Comprehensive Services</h1>
      <div className="row">
        {servicesData.map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title fw-bold">{service.title}</h2>
                <p className="card-text">{service.description}</p>
                <p className="card-text text-muted">{service.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
      </div>
    </div>
  );
};

export default ServicesPage;
