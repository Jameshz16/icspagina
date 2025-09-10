import React from 'react';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'General Contracting',
    description: 'We provide full general contracting services from project start to finish.',
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Construction Management',
    description: 'Our team can manage your project to ensure it is completed on time and on budget.',
    image: '/assets/post-tencion.png'
  },
  {
    title: 'Building Information Modeling',
    description: 'We use BIM to create detailed 3D models of your project.',
    image: '/assets/painting.jpg'
  },
  {
    title: 'Design-Build',
    description: 'Our design-build services streamline the project delivery process.',
    image: '/assets/Waterproofing.jpg'
  },
  {
    title: 'Pre-construction',
    description: 'We offer pre-construction services to help you plan your project.',
    image: '/assets/Shell-Construction.jpg'
  },
  {
    title: 'Sustainability',
    description: 'We are committed to building sustainable projects that are environmentally friendly.',
    image: '/assets/additions.jpeg'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container-fluid">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Services</h2>
          <p className="lead text-muted">Our commitment is to provide the best solutions for you. We specialize in the following services:</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className={styles.flipCardBack}>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
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