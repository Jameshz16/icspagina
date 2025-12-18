import React from 'react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    title: 'Custom Pool Construction',
    category: 'Pools',
    image: '/assets/proyectpool/06.jpg'
  },
  {
    title: 'Commercial Painting',
    category: 'Painting',
    image: '/assets/painting.jpg'
  },
  {
    title: 'Structural Shell Tech',
    category: 'Construction',
    image: '/assets/Shell-Construction.jpg'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.projectSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Featured Projects</h2>
          <p className="lead text-muted">Showcasing our excellence in construction and renovation.</p>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.overlay}>
                  <div className={styles.projectContent}>
                    <p className={styles.category}>{project.category}</p>
                    <h3 className={styles.title}>{project.title}</h3>
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

export default ProjectsSection;
