"use client";

import React from 'react';

const ContactPage = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-5">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <p className="lead text-center">Have a question or need a free estimate? Fill out the form below or reach us directly.</p>

          <div className="row">
            <div className="col-md-6">
              <form className="mb-5">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="mt-md-0 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9000000000005!2d-80.18800000000001!3d26.368000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2s21218%20St%20Andrews%20Blvd%20%23727%2C%20Boca%20Raton%2C%20FL%2033433%2C%20USA!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6 text-center">
              <p className="fw-bold">Phone:</p>
              <p>(123) 456-7890</p>
              <p className="fw-bold">Email:</p>
              <p>info@innovativerestoration.com</p>
            </div>
            <div className="col-md-6 text-center">
              <p className="fw-bold">Our Office:</p>
              <p>21218 St Andrews Blvd #727<br/>Boca Raton, FL 33433</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
