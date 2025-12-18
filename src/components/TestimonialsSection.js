import React from 'react';
import Image from 'next/image';

import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "This is a great company! They are very professional and do excellent work. I would highly recommend them to anyone.",
    author: "John Doe",
    company: "ABC Company",
    image: "https://i.pravatar.cc/150?img=8"
  },
  {
    quote: "I was very impressed with the quality of their work. They were on time and on budget. I would definitely use them again.",
    author: "Jane Smith",
    company: "XYZ Inc.",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "A great team to work with. They are very responsive and easy to communicate with. I am very happy with the results.",
    author: "Peter Jones",
    company: "123 Corp.",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Client Testimonials</h2>
          <p className="lead text-muted">Hear from our satisfied clients about their experience.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    fill
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.quoteIcon}>❝</div>
                <p className={styles.quote}>&quot;{testimonial.quote}&quot;</p>
                <div>
                  <h5 className={styles.author}>{testimonial.author}</h5>
                  <p className={styles.company}>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
