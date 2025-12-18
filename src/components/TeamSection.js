import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Chett Cockrill',
    role: 'Owner',
    image: '/assets/Chet.jpeg',
    bio: 'Chett is the visionary leader of our company, with over 20 years of experience in the construction industry. His strategic insights drive our success.'
  },
  {
    name: 'Alex Cockrill',
    role: 'Superintendent',
    image: '/assets/Alex.jpeg',
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
  },
  {
    name: 'Josh Flores',
    role: 'Sr Construction Superintendent',
    image: '/assets/josh.jpeg',
    bio: 'As Senior Construction Superintendent, Josh oversees site operations with a focus on quality control, safety compliance, and efficient project delivery.'
  }
];
 
import styles from './TeamSection.module.css';

// ... (teamMembers array remains unchanged, not including it here to correspond to StartLine where component starts)

const TeamSection = () => {
  return (
    <section id="team" className={styles.teamSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Executive Managers</h2>
          <p className="lead text-muted">Our expert team driving excellence in every project.</p>
        </div>
        <div className="row justify-content-center g-4">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={styles.teamCard}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={styles.teamImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <h5 className={styles.name}>{member.name}</h5>
                  <p className={styles.role}>{member.role}</p>
                  <p className={styles.bio}>{member.bio}</p>
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
