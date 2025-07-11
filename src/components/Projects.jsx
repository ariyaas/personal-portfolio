import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart functionality and payment integration.',
      image: 'project1.jpg',
      demoLink: 'https://demo-ecommerce.com',
      githubLink: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      image: 'project2.jpg',
      demoLink: 'https://demo-taskmanager.com',
      githubLink: 'https://github.com/username/taskmanager'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics.',
      image: 'project3.jpg',
      demoLink: 'https://demo-socialdashboard.com',
      githubLink: 'https://github.com/username/socialdashboard'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;