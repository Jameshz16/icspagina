import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaHammer, 
  FaWrench, 
  FaPaintBrush, 
  FaTint, 
  FaBuilding, 
  FaSwimmingPool
} from 'react-icons/fa';

const services = [
  {
    title: 'Concrete Restoration',
    description: 'High-quality restoration for durable and long-lasting concrete structures.',
    icon: FaHammer,
    image: '/assets/concrete.jpg',
    link: '/services'
  },
  {
    title: 'Post-Tension Repair',
    description: 'Specialized repair and maintenance for post-tensioned concrete systems.',
    icon: FaWrench,
    image: '/assets/post-tencion.png',
    link: '/services'
  },
  {
    title: 'Professional Painting',
    description: 'Professional interior and exterior painting services with premium finishes.',
    icon: FaPaintBrush,
    image: '/assets/painting.jpg',
    link: '/services'
  },
  {
    title: 'Waterproofing',
    description: 'Comprehensive waterproofing solutions to protect your property.',
    icon: FaTint,
    image: '/assets/Waterproofing.jpg',
    link: '/services'
  },
  {
    title: 'Pool Repair & Maintenance',
    description: 'Expert pool services including Diamond Brite plaster and refinishing.',
    icon: FaSwimmingPool,
    image: '/assets/pool.jpg',
    link: '/services'
  },
  {
    title: 'Shell Construction',
    description: 'Comprehensive shell construction services for new buildings and structures.',
    icon: FaBuilding,
    image: '/assets/Shell-Construction.jpg',
    link: '/services'
  }
];

const ServicesSection = () => {
  return (
    <section className="section bg-light-gray">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Services</h2>
          <p className="lead text-muted">
            Comprehensive construction and pool services delivered with excellence
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-card h-100">
                  {/* Image Section */}
                  <div className="service-image-container mb-3">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      width={400}
                      height={250}
                      className="service-image"
                      style={{objectFit: "cover"}}
                    />
                    <div className="service-image-overlay">
                      <IconComponent size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="service-content">
                    <div className="service-icon mb-2">
                      <IconComponent size={32} />
                    </div>
                    <h5 className="service-title">{service.title}</h5>
                    <p className="service-description">{service.description}</p>
                    <Link href={service.link} className="service-link">
                      Explore <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-5">
          <Link href="/services" className="cta-button">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;