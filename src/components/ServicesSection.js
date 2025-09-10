import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

const services = [
  {
    title: 'Concrete Restoration',
    description: 'Specializing in the repair and restoration of concrete structures to their original strength and appearance.',
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Post Tension',
    description: 'Expertise in post-tensioning systems for reinforced concrete, enhancing durability and structural performance.',
    image: '/assets/post-tencion.png'
  },
  {
    title: 'Painting',
    description: 'Professional interior and exterior painting services for commercial and residential properties.',
    image: '/assets/painting.jpg'
  },
  {
    title: 'Waterproofing',
    description: 'Comprehensive waterproofing solutions to protect your building from water damage and ensure longevity.',
    image: '/assets/Waterproofing.jpg'
  },
  {
    title: 'Shell Construction',
    description: 'Constructing the structural shell of buildings, including foundations, walls, and roofing systems.',
    image: '/assets/Shell-Construction.jpg'
  },
  {
    title: 'Additions',
    description: 'Seamlessly constructing additions to expand your existing property with quality and precision.',
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
              <div className={styles.serviceCard}>
                <Image src={service.image} alt={service.title} width={500} height={300} />
                <div className={styles.overlay}>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
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