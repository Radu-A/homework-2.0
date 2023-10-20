import React from "react";

const ProjectInfoSection = ({projectDetails}) => {
  return (
    <section className="project-info-section">
      <h2>{projectDetails.title}</h2>
      <div>
        <p>{projectDetails.type}</p>
        <p>{projectDetails.date}</p>
      </div>
      <p>{projectDetails.description}</p>
    </section>
    );
};

export default ProjectInfoSection;
