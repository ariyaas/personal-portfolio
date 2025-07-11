import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>Email: john.doe@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <div className="social-links">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;