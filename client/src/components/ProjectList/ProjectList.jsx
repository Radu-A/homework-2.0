import ProjectCard from "./ProjectCard/ProjectCard";
import { v4 as uuidv4 } from 'uuid';

const ProjectList = ({ projectList }) => {
  return (
    <section className="project-list-section">
      {projectList &&
        projectList.map((project) => {
          return <ProjectCard project={project} key={uuidv4()}/>;
        })}
    </section>
  );
};

export default ProjectList;
