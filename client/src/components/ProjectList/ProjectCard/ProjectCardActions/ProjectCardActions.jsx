import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// icons
import likeIcon from "../../../../assets/icons/like-icon.svg";
import likeIconRed from "../../../../assets/icons/like-icon-red.svg";
import commentIcon from "../../../../assets/icons/comment-icon.svg";
// import saveIcon from "../../../../assets/icons/save-icon.svg";

const ProjectCardActions = ({ handleClick, projectId }) => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const { user } = useAuth0();
  // let userId;
  if (user) {
    // userId = user.sub;
  }

  // states
  const [userId, setUserId] = useState("");
  const [like, setLike] = useState(false);
  const [likesNumber, setLikesNumber] = useState(null);

  // functions
  const getLikesNumber = async () => {
    try {
      const result = await fetch(
        `${server}/api/likes/count?project_id=${projectId}`
      );
      const [data] = await result.json();
      setLikesNumber(data.count);
    } catch (error) {
      console.log(error);
    }
  };

  const searchLike = async () => {
    console.log(userId);
    try {
      const result = await fetch(
        `${server}/api/likes?user_id=${userId}&project_id=${projectId}`
      );
      const data = await result.json();
      // setLike(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLikesInfo = async () => {
    // await getLikesNumber();
    await searchLike();
  };

  const handleLike = () => {
    setLike(!like);
  };

  // life cycle
  useEffect(() => {
    if (user) {
      console.log(user.sub)
      setUserId(user.sub);
    }
  }, []);

  useEffect(() => {
    // getLikesNumber();
    // searchLike();
    getLikesInfo();
  }, [userId]);

  return (
    <div className="project-card-actions" onClick={handleLike}>
      <div className="like-div">
        <p>{likesNumber}</p>
        {like ? (
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
