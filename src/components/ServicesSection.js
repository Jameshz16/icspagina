import React from 'react';

const services = [
  {
    title: 'Concrete Restoration',
    description: 'High-quality restoration for durable and long-lasting concrete structures.',
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Post-Tension Repair',
    description: 'Specialized repair and maintenance for post-tensioned concrete systems.',
    image: '/assets/post-tencion.png'
  },
  {
    title: 'Painting',
    description: 'Professional interior and exterior painting services for a fresh, new look.',
    image: '/assets/painting.jpg'
  },
  {
    title: 'Waterproofing',
    description: 'Protect your property from water damage with our expert waterproofing solutions.',
    image: '/assets/Waterproofing.jpg'
  },
  {
    title: 'Shell Construction',
    description: 'Comprehensive shell construction services for new buildings and structures.',
    image: '/assets/Shell-Construction.jpg'
  },
  {
    title: 'Additions',
    description: 'Expand your space with our seamless and structurally sound home additions.',
    image: '/assets/additions.jpeg'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-5" style={{ backgroundColor: 'var(--light-blue)' }}>
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
                  <img src={service.image} alt={service.title} className="mb-3" style={{width: "150px", height: "150px", objectFit: "cover"}} />
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