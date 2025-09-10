import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "This is a great company! They are very professional and do excellent work. I would highly recommend them to anyone.",
    author: "John Doe",
    company: "ABC Company",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "I was very impressed with the quality of their work. They were on time and on budget. I would definitely use them again.",
    author: "Jane Smith",
    company: "XYZ Inc.",
    image: "https://i.pravatar.cc/150?img=2"
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
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Positive Comments</h2>
          <p className="lead text-muted">Here&apos;s what our clients have to say about us.</p>
        </div>
        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center">
                <div className="card-body">
                  <Image src={testimonial.image} alt={testimonial.author} width={100} height={100} className="rounded-circle mb-3" style={{objectFit: "cover"}} />
                  <p className="card-text">&quot;{testimonial.quote}&quot;</p>
                  <footer className="blockquote-footer">{testimonial.author}, <cite title="Source Title">{testimonial.company}</cite></footer>
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
