import React from 'react';

// import { Container } from './styles';

const ProjectsSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="grey-text">3rd Semptember, 2am</p>
      </div>
    </div>
  );
};

export default ProjectsSummary;
