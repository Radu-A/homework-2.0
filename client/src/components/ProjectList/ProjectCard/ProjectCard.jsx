import likeIcon from "../../../assets/icons/like-icon.svg";
import commentIcon from "../../../assets/icons/comment-icon.svg";
import saveIcon from "../../../assets/icons/save-icon.svg";

const ProjectCard = ({ project }) => {
  return (
    <article className="project-card-article">
      <div className="project-card-user-info">
        <img src={project.photo} alt="" className="project-card-user-photo" />
        <h4 className="project-card-firstname">{project.firstname}</h4>
        <h4 className="project-card-lastname">{project.lastname}</h4>
        <p className="project-card-bootcamp">{project.bootcamp}</p>
        <p className="project-card-curse">{project.curse}</p>
      </div>
      <div className="project-card-heading">
        <h2 className="project-card-title">{project.title}</h2>
        <p className="project-card-type">{project.type}</p>
        <p className="project-card-data">{project.data}</p>
      </div>
      <div className="project-card-description">
        <p>{project.description}</p>
      </div>
      <div className="project-card-actions">
        <div className="like-div">
          <img src={likeIcon} alt="" />
          <p>Like</p>
        </div>
        <div className="comment-div">
          <img src={commentIcon} alt="" />
          <p>Comment</p>
        </div>
        <div className="save-div">
          <img src={saveIcon} alt="" />
          <p>Save</p>
        </div>
      </div>
      <img src={project.img_small} alt="" className="project-card-screenshot" />
    </article>
  );
};

export default ProjectCard;
