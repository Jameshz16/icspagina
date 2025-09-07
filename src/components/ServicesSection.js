import React from 'react';

// TODO: Replace placeholder images with actual royalty-free images for each service.
// You can find royalty-free images on websites like Unsplash, Pexels, or Freepik.
const services = [
  {
    title: 'Concrete Restoration',
    description: 'High-quality restoration for durable and long-lasting concrete structures.',
    imageUrl: 'https://images.unsplash.com/photo-1529939803454-256499b958dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Post-Tension Repair',
    description: 'Specialized repair and maintenance for post-tensioned concrete systems.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Painting',
    description: 'Professional interior and exterior painting services for a fresh, new look.',
    imageUrl: 'https://images.unsplash.com/photo-1596821928435-3c70a1de74a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Waterproofing',
    description: 'Protect your property from water damage with our expert waterproofing solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1542104093-850545c8a415?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Shell Construction',
    description: 'Comprehensive shell construction services for new buildings and structures.',
    imageUrl: 'https://images.unsplash.com/photo-1551923301-43c2353a4a2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Additions',
    description: 'Expand your space with our seamless and structurally sound home additions.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6164a83639?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p className="lead text-muted">We offer a wide range of restoration and repair solutions.</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <img src={service.imageUrl} alt={service.title} className="mb-3" style={{width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%"}} />
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;