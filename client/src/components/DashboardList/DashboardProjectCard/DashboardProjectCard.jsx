// card images
import cardCyber from "../../../assets/images/card-cyber-security.svg";
import cardData from "../../../assets/images/card-data-science.svg";
import cardFull from "../../../assets/images/card-full-stack.svg";
import cardUX from "../../../assets/images/card-ux-ui.svg";

// icons
import editIcon from "../../../assets/icons/pencil.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProjectDetailsContext } from "../../../context/projectDetailsContext";
import DeleteButton from "./DeleteButton/DeleteButton";

const DashboardProjectCard = ({ project }) => {
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
  // context
  const { updateProjectDetails } = useContext(ProjectDetailsContext);

  // functions
  const handleClick = () => {
    updateProjectDetails(project);
    navigate("/project");
  };

  const handleEdit = () => {
    updateProjectDetails(project);
    navigate("/edit");
  };

  return (
    <article className="project-card-article">
      <div className="project-card-actions">
        <button onClick={handleEdit}>
          <img src={editIcon} alt="" />
        </button>
        <DeleteButton project={project} />
      </div>
      <div className="project-card-heading" onClick={handleClick}>
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-type">{project.type}</p>
        <p className="project-card-data">{project.date}</p>
      </div>
      <div className="project-card-description" onClick={handleClick}>
        <p>{project.description}</p>
      </div>
      <img src={screenshot} alt="" className="project-card-screenshot" />
    </article>
  );
};

export default DashboardProjectCard;
