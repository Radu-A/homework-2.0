import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProjectDetailsContext } from "../../../context/projectDetailsContext";

// card images
import cardCyber from "../../../assets/images/card-cyber-security.svg";
import cardData from "../../../assets/images/card-data-science.svg";
import cardFull from "../../../assets/images/card-full-stack.svg";
import cardUX from "../../../assets/images/card-ux-ui.svg";
import ProjectCardActions from "./ProjectCardActions/ProjectCardActions";
import { useMediaQuery } from "react-responsive";

const ProjectCard = ({ project }) => {
  // variables
  const navigate = useNavigate();
  let screenshot = "";
  if (project.img_small) {
    screenshot = project.img_small;
  } else {
    switch (project.bootcamp) {
      case "Cybersecurity":
        screenshot = cardCyber;
        break;
      case "Data Science":
        screenshot = cardData;
        break;
      case "Full-Stack":
        screenshot = cardFull;
        break;
      case "UX/UI":
        screenshot = cardUX;
        break;
    }
  }

  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });

  // context
  const { updateProjectDetails } = useContext(ProjectDetailsContext);

  // functions
  const handleClick = (event) => {
    updateProjectDetails(project);
    if (event.target.className === "comment-element") {
      navigate("/project/#comment");
    } else {
      navigate("/project");
    }
  };

  return (
    <article className="project-card-article">
      <div className="project-card-user-info">
        <img src={project.photo} alt="" className="project-card-user-photo" />
        <div className="project-card-name-div">
          <h4 className="project-card-firstname">{project.firstname}</h4>
          <h4 className="project-card-lastname">{project.lastname}</h4>
        </div>
        <div className="project-card-bootcamp-div">
          <p className="project-card-bootcamp">{project.bootcamp}</p>
          <p className="project-card-curse">{project.curse}</p>
        </div>
      </div>
      <div className="project-card-heading" onClick={handleClick}>
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-type">{project.type}</p>
        <p className="project-card-data">{project.date}</p>
      </div>
      <div className="project-card-description" onClick={handleClick}>
        <p>{project.description}</p>
      </div>
      <ProjectCardActions
        handleClick={handleClick}
        projectId={project.project_id}
      />
      {isTablet && (
        <img src={screenshot} alt="" className="project-card-screenshot" />
      )}
    </article>
  );
};

export default ProjectCard;
