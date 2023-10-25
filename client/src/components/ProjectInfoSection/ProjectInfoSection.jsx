import React from "react";

const ProjectInfoSection = ({projectDetails}) => {
  return (
    <section className="project-info-section">
      <h1>{projectDetails.title}</h1>
      <div>
        <p>{projectDetails.type}</p>
        <p>{projectDetails.date}</p>
      </div>
      <p className="project-description-paragraph">{projectDetails.description}</p>
    </section>
    );
};

export default ProjectInfoSection;
