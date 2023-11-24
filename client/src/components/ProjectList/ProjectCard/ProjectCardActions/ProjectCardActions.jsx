import { useEffect, useState } from "react";
// icons
import likeIcon from "../../../../assets/icons/like-icon.svg";
import likeIconRed from "../../../../assets/icons/like-icon-red.svg";
import commentIcon from "../../../../assets/icons/comment-icon.svg";
// import saveIcon from "../../../../assets/icons/save-icon.svg";

const ProjectCardActions = ({ handleClick, projectId }) => {
  // variables
  const server = import.meta.env.VITE_SERVER;

  // states
  const [isLike, setIsLike] = useState(false);
  const [likesNumber, setLikesNumber] = useState(null);

  // functions
  const getLikesNumber = async () => {
    try {
      const result = await fetch(
        `${server}/api/likes/count?project_id=${projectId}`
      );
      const [data] = await result.json();
      setLikesNumber(data.count);
      console.log(data.count);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLike = () => {
    setIsLike(!isLike);
  };

  // life cycle
  useEffect(() => {
    getLikesNumber();
  }, []);

  return (
    <div className="project-card-actions" onClick={handleLike}>
      <div className="like-div">
        <p>{likesNumber}</p>
        {isLike ? (
          <img src={likeIconRed} alt="" />
        ) : (
          <img src={likeIcon} alt="" />
        )}
        <p>Like</p>
      </div>
      <div className="comment-div" onClick={handleClick}>
        <img src={commentIcon} alt="" className="comment-element" />
        <p className="comment-element">Comment</p>
      </div>
      {/* <div className="save-div">
          <img src={saveIcon} alt="" />
          <p>Save</p>
        </div> */}
    </div>
  );
};

export default ProjectCardActions;
