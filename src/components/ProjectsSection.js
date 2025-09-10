import React from 'react';
import styles from './ProjectsSection.module.css';

const projects = [
  {
    title: 'Concrete Work',
    image: '/assets/concrete.jpg'
  },
  {
    title: 'Painting Services',
    image: '/assets/painting.jpg'
  },
  {
    title: 'Shell Construction',
    image: '/assets/Shell-Construction.jpg'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Projects</h2>
          <p className="lead text-muted">Here are some of our recent projects.</p>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={`card h-100 text-center shadow-sm ${styles.projectCard}`}>
                <img src={project.image} className="card-img-top" alt={project.title} style={{height: "200px", objectFit: "cover"}}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.title}</h5>
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
