
import React from 'react';

const features = [
  {
    title: 'Licence',
    description: 'CBC 1250136',
    icon: '🕒' // Placeholder icon
  },
  {
    title: 'Certified Technicians',
    description: 'Our team consists of IICRC certified professionals with extensive experience in the industry.',
    icon: '✅' // Placeholder icon
  },
  {
    title: 'Customer Satisfaction',
    description: 'We are committed to providing the highest quality work and ensuring our clients are 100% satisfied.',
    icon: '⭐' // Placeholder icon
  },
  {
    title: 'Free Estimates',
    description: 'Contact us today for a comprehensive, no-obligation estimate for your restoration project.',
    icon: '📝' // Placeholder icon
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--light-blue)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="lead text-muted">Your peace of mind is our top priority.</p>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="text-center">
                <div className="display-4 mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
