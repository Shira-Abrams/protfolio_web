import React from 'react';
import '../styles/Projects.scss';

const projects = [
  {
    title: 'Real Estate project',
    description: 'developed using c# react and sql server',
    link: 'https://github.com/Shira-Abrams/ForSale-Mediation'
  },
  {
    title: 'Recipe Project ',
    description: 'developed in angular node.js and mongo DB',
    link: 'https://github.com/Shira-Abrams/recipes_client'
  },
 
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-column">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
