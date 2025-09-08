import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'Outstanding service! The team was professional and efficient. Highly recommended!',
    rating: 5
  },
  {
    name: 'Jane Smith',
    quote: 'I was amazed by the quick response and quality of work. They truly care about their customers.',
    rating: 5
  },
  {
    name: 'Peter Jones',
    quote: 'Reliable and trustworthy. They made a difficult situation much easier to handle.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: 'var(--light-blue)' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Clients Say</h2>
          <p className="lead text-muted">Hear from our satisfied customers.</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 rounded-lg">
                <div className="card-body p-4">
                  <p className="card-text text-center mb-4">&quot;{testimonial.quote}&quot;</p>
                  {/* Render star ratings */}
                  <div className="text-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: 'gold', fontSize: '1.5rem' }}>★</span>
                    ))}
                  </div>
                  <footer className="blockquote-footer text-center mt-3">{testimonial.name}</footer>
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
