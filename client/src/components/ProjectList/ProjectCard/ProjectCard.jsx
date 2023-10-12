import likeIcon from "../../../assets/icons/like-icon.svg";
import commentIcon from "../../../assets/icons/comment-icon.svg";
import saveIcon from "../../../assets/icons/save-icon.svg";

const ProjectCard = () => {
  return (
    <article className="project-card-article">
      <div className="project-card-user-info">
        <img src="" alt="" className="project-card-user-photo" />
        <h4 className="project-card-firstname"></h4>
        <h4 className="project-card-lastname"></h4>
        <p className="project-card-bootcamp"></p>
        <p className="project-card-curse"></p>
      </div>
      <div className="project-card-heading">
        <h2 className="project-card-title"></h2>
        <p className="project-card-type"></p>
        <p className="project-card-data"></p>
      </div>
      <div className="project-card-description">
        <p></p>
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
      <img src="" alt="" className="project-card-screenshot" />
    </article>
  );
};

export default ProjectCard;
