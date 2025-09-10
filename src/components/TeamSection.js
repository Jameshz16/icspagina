import React from 'react';

const teamMembers = [
  {
    name: 'James Smith',
    role: 'CEO',
    image: '/assets/team-member-1.jpg' // Placeholder image
  },
  {
    name: 'Sarah Johnson',
    role: 'Project Manager',
    image: '/assets/team-member-2.jpg' // Placeholder image
  },
  {
    name: 'David Williams',
    role: 'Lead Architect',
    image: '/assets/team-member-3.jpg' // Placeholder image
  },
  {
    name: 'Emily Brown',
    role: 'Lead Engineer',
    image: '/assets/team-member-4.jpg' // Placeholder image
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
          <p className="lead text-muted">Our team of experts is ready to help you with your project.</p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <img src={member.image} className="card-img-top" alt={member.name} style={{height: "250px", objectFit: "cover"}}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;