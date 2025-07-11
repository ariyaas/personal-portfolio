import React from 'react';

const Skills = () => {
  const frontendSkills = [
    'HTML/CSS', 'JavaScript', 'React', 'Redux', 'TypeScript', 'Tailwind CSS'
  ];

  const backendSkills = [
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Django'
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <div className="skills-box">
          <h3>Frontend</h3>
          <ul>
            {frontendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-box">
          <h3>Backend</h3>
          <ul>
            {backendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;