import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-qualification">
          <h3>Qualification</h3>
          <p>
            Bachelor's Degree in Computer Science from XYZ University (2020)
          </p>
          <p>
            Certified Full Stack Developer from ABC Institute (2021)
          </p>
        </div>
        <div className="about-description">
          <p>
            I'm a passionate developer with 3+ years of experience building web applications.
            My journey in tech started when I built my first website at 16, and since then
            I've been hooked on creating digital solutions.
          </p>
          <p>
            When I'm not coding, you can find me hiking, reading sci-fi novels,
            or experimenting with new technologies. I believe in continuous learning
            and staying updated with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;