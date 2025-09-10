import React from 'react';

const teamMembers = [
  {
    name: 'Chett Cockrill',
    role: 'Owner',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Chett is the visionary leader of our company, with over 20 years of experience in the construction industry. His strategic insights drive our success.'
  },
  {
    name: 'Alex Cockrill',
    role: 'Superintendent',
    image: 'https://randomuser.me/api/portraits/men/44.jpg',
    bio: 'Alex ensures that every project is executed flawlessly on-site. His meticulous attention to detail guarantees quality and efficiency.'
  },
  {
    name: 'Tyler Cockrill',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/men/50.jpg',
    bio: 'Tyler excels at coordinating complex projects, keeping them on schedule and within budget. His communication skills are key to our client satisfaction.'
  },
  {
    name: 'Vincent Cockrill',
    role: 'Managging Member',
    image: 'https://randomuser.me/api/portraits/men/60.jpg',
    bio: 'Vincent is instrumental in managing our operational excellence and fostering strong client relationships. He ensures smooth business processes.'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-5 bg-light">
      <div className="container-fluid px-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Executive managers</h2>
          <p className="lead text-muted">Our team of experts is ready to help you with your project.</p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center shadow-sm">
                <img src={member.image} alt={member.name} className="mx-auto mt-3" style={{width: "150px", height: "150px", objectFit: "cover"}}/>
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                  <p className="card-text small">{member.bio}</p> {/* Added biography */}
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