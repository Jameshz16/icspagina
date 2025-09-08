
import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container text-center">
        <h2 className="fw-bold">Ready to Restore Your Property?</h2>
        <p className="lead my-4">Don't wait for the damage to get worse. Our team is ready to help you 24/7.</p>
        <Link href="/contact" className="btn btn-light btn-lg">Contact Us Now</Link>
      </div>
    </section>
  );
};

export default CTASection;
