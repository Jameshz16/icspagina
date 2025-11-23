"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Construction Pool',
    category: 'Pools',
    description: 'reshly filled and ready for landscaping. This project showcases our attention to structural detail, from the perfectly leveled coping to the seamless tile installation on the raised spa. This durable construction is built to last, featuring high-efficiency plumbing and a robust shell design tailored to the property\'s terrain.',
    location: 'South Florida',
    year: '2025',
    image: '/assets/proyectpool/06.jpg',
    featured: true
  }
];

const categories = ['All', 'Pools', 'Concrete', 'Structural', 'Waterproofing', 'Additions', 'Construction'];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomedSrc, setZoomedSrc] = useState(null);

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero position-relative">
        <div className="hero-overlay"></div>
        <div className="container position-relative z-index-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-white mb-4">
                Our Portfolio of Excellence
              </h1>
              <p className="lead text-white-50 mb-0">
                Discover our completed projects showcasing innovation, quality craftsmanship, 
                and attention to detail across South Florida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <div className="filter-buttons">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="search-box">
                <div className="input-group">
                  <span className="input-group-text">
                    <FaSearch />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-5 projects-grid-section">
        <div className="container">
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="col-xl-4 col-lg-6 mb-5" 
                style={{'--animation-order': index}}
              >
                <div className="project-card-enhanced h-100">
                  <div className="project-image-wrapper-enhanced">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-image-enhanced"
                    />
                    <div className="project-gradient-overlay"></div>
                    {project.featured && (
                      <div className="featured-badge">
                        <span>Featured</span>
                      </div>
                    )}
                    <div className="project-overlay-content">
                      <div className="project-meta">
                        <span className="project-category">{project.category}</span>
                        <span className="project-year">{project.year}</span>
                      </div>
                      <h4 className="project-overlay-title">{project.title}</h4>
                    </div>
                  </div>
                  <div className="project-content-enhanced">
                    <div className="project-header">
                      <h3 className="project-title-enhanced">{project.title}</h3>
                      <div className="project-underline"></div>
                    </div>
                    <p className="project-description-enhanced">{project.description}</p>
                    <div className="project-details">
                      <div className="project-location">
                        <FaMapMarkerAlt className="location-icon" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="project-footer">
                      <button className="project-btn-enhanced" onClick={() => setIsModalOpen(true)}>
                        <span>View Details</span>
                        <FaArrowRight className="btn-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-5">
              <div className="no-results">
                <FaSearch className="no-results-icon mb-3" />
                <h3>No projects found</h3>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {isModalOpen && (
        <div className="gallery-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-modal-header">
              <h3 className="gallery-title">Construction Pool</h3>
              <button className="gallery-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <div className="gallery-grid">
              {['01','02','03','04','05','06'].map(num => (
                <div key={num} className="gallery-item" onClick={() => setZoomedSrc(`/assets/proyectpool/${num}.jpg`)}>
                  <Image
                    src={`/assets/proyectpool/${num}.jpg`}
                    alt={`Construction Pool ${num}`}
                    fill
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {zoomedSrc && (
        <div className="image-zoom-overlay" onClick={() => setZoomedSrc(null)}>
          <div className="image-zoom-box" onClick={(e) => e.stopPropagation()}>
            <Image src={zoomedSrc} alt="Zoomed image" fill className="image-zoom-image" />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="projects-cta py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="fw-bold text-white mb-3">
                Ready to Start Your Project?
              </h2>
              <p className="text-white-50 mb-0">
                Let&apos;s bring your vision to life with our expertise and commitment to excellence.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="/contact" className="btn btn-light btn-lg">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaPhone className="contact-icon mb-3" />
                <h5>Call Us</h5>
                <p className="mb-0">(561) 913-8055</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaEnvelope className="contact-icon mb-3" />
                <h5>Email Us</h5>
                <p className="mb-0">chett@innovativecustomservices.com</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon mb-3" />
                <h5>Visit Us</h5>
                <p className="mb-0">South Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .projects-hero {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .projects-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/Shell-Construction.jpg') center/cover;
          opacity: 0.3;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 51, 102, 0.8);
          z-index: 1;
        }

        .z-index-1 {
          z-index: 1;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .filter-btn {
          background: white;
          border: 2px solid var(--border-light);
          color: var(--blue-gray);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--primary-blue) 100%);
          color: white;
          border-color: var(--accent-blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.3);
        }

        .search-box {
          position: relative;
        }

        .input-group-text {
          background: white;
          border: 2px solid var(--border-light);
          border-right: none;
          color: var(--accent-blue);
          padding: 0.75rem 1rem;
        }

        .form-control {
          border: 2px solid var(--border-light);
          border-left: none;
          border-radius: 0 50px 50px 0;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 0.2rem rgba(0, 102, 204, 0.25);
          outline: none;
        }

        .projects-grid-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .project-card-enhanced {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          position: relative;
        }

        .project-card-enhanced:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .project-image-wrapper-enhanced {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .project-image-enhanced {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card-enhanced:hover .project-image-enhanced {
          transform: scale(1.1);
        }

        .project-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 51, 102, 0.8) 0%, rgba(0, 102, 204, 0.8) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .project-card-enhanced:hover .project-gradient-overlay {
          opacity: 1;
        }

        .featured-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, var(--success-green) 0%, #059669 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          z-index: 3;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .project-overlay-content {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          z-index: 3;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .project-card-enhanced:hover .project-overlay-content {
          opacity: 1;
          transform: translateY(0);
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .project-category {
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-blue);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .project-year {
          color: white;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-overlay-title {
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0;
        }

        .project-content-enhanced {
          padding: 2.5rem;
          position: relative;
          z-index: 4;
        }

        .project-header {
          margin-bottom: 1.5rem;
        }

        .project-title-enhanced {
          color: var(--primary-blue);
          font-weight: 800;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .project-card-enhanced:hover .project-title-enhanced {
          color: var(--accent-blue);
        }

        .project-underline {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--accent-blue) 0%, var(--primary-blue) 100%);
          border-radius: 2px;
          transition: width 0.4s ease;
        }

        .project-card-enhanced:hover .project-underline {
          width: 100px;
        }

        .project-description-enhanced {
          color: #495057;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-details {
          margin-bottom: 2rem;
        }

        .project-location {
          display: flex;
          align-items: center;
          color: var(--medium-gray);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .location-icon {
          margin-right: 0.5rem;
          color: var(--accent-blue);
        }

        .project-footer {
          text-align: center;
        }

        .project-btn-enhanced {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--accent-blue) 0%, var(--primary-blue) 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
          border: none;
          position: relative;
          overflow: hidden;
        }

        .project-btn-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .project-btn-enhanced:hover::before {
          left: 100%;
        }

        .project-btn-enhanced:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 102, 204, 0.4);
        }

        .btn-arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .project-btn-enhanced:hover .btn-arrow {
          transform: translateX(5px);
        }

        .gallery-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
          padding: 1rem;
        }

        .gallery-modal {
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 1000px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .gallery-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .gallery-title {
          margin: 0;
          font-weight: 800;
          color: var(--primary-blue);
        }

        .gallery-close {
          background: transparent;
          border: none;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          color: var(--blue-gray);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          padding: 1rem;
        }

        .gallery-item {
          position: relative;
          width: 100%;
          padding-top: 66.66%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
          cursor: zoom-in;
        }

        .gallery-image {
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        .image-zoom-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          cursor: zoom-out;
          padding: 1rem;
        }

        .image-zoom-box {
          position: relative;
          width: 90vw;
          max-width: 1200px;
          height: 80vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          background: #000;
        }

        .image-zoom-image {
          object-fit: contain;
          background: #000;
        }

        .no-results {
          padding: 3rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .no-results-icon {
          font-size: 3rem;
          color: var(--accent-blue);
        }

        .projects-cta {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-blue) 100%);
        }

        .contact-item {
          padding: 2.5rem;
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          height: 100%;
          transition: transform 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-5px);
        }

        .contact-icon {
          font-size: 2.5rem;
          color: var(--accent-blue);
          margin-bottom: 1rem;
        }

        .text-white-50 {
          color: rgba(255, 255, 255, 0.8) !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card-enhanced {
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: calc(var(--animation-order) * 0.1s);
        }

        @media (max-width: 768px) {
          .projects-hero {
            padding: 80px 0 60px;
          }
          
          .display-4 {
            font-size: 2rem;
          }
          
          .filter-buttons {
            justify-content: center;
            margin-bottom: 2rem;
          }
          
          .search-box {
            margin-top: 1rem;
          }
          
          .project-image-wrapper-enhanced {
            height: 240px;
          }
          
          .project-content-enhanced {
            padding: 2rem;
          }
          
          .project-title-enhanced {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 576px) {
          .project-image-wrapper-enhanced {
            height: 200px;
          }
          
          .project-content-enhanced {
            padding: 1.5rem;
          }
          
          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;