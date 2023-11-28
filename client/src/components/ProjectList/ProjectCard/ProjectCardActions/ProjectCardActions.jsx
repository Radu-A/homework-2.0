import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// icons
import likeIcon from "../../../../assets/icons/like-icon.svg";
import likeIconRed from "../../../../assets/icons/like-icon-red.svg";
import commentIcon from "../../../../assets/icons/comment-icon.svg";
import { json } from "react-router-dom";
// import saveIcon from "../../../../assets/icons/save-icon.svg";

const ProjectCardActions = ({ handleClick, projectId }) => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const { user } = useAuth0();

  // states
  // const [userId, setUserId] = useState("");
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
    if (user) {
      const userId = user.sub;
      try {
        const result = await fetch(
          `${server}/api/likes?user_id=${userId}&project_id=${projectId}`
        );
        const data = await result.json();
        if (data === true) {
          setLike(true);
        } else {
          setLike(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createLike = async () => {
    const userId = user.sub;
    console.log(userId);
    console.log(projectId);
    try {
      const result = await fetch(`${server}/api/likes`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          project_id: projectId,
        }),
      });
      const data = await result.json();
      if (data.created === true) {
        setLike(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteLike = async () => {
    const userId = user.sub;
    try {
      const result = await fetch(`${server}/api/likes`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          project_id: projectId,
        }),
      });
      const data = await result.json();
      if (data.deleted === true) {
        setLike(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLikesInfo = async () => {
    // await searchLike();
    await getLikesNumber();
  };

  const handleLike = async () => {
    if (like === true) {
      await deleteLike();
      await getLikesNumber();
    } else {
      await createLike();
      await getLikesNumber();
    }
  };

  // life cycle
  useEffect(() => {
    getLikesInfo();
  }, [user]);

  return (
    <div className="project-card-actions">
      <div className="like-div" onClick={handleLike}>
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
