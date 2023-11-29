// modules
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// context
import { ProjectDetailsContext } from "../../../context/projectDetailsContext";
// components
import CommentArticle from "./CommentArticle/CommentArticle";

const FeedbackList = () => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const { projectDetails, commentTrigger } = useContext(ProjectDetailsContext);
  // states
  const [commentsList, setCommentsList] = useState("");

  const searchComment = async (project_id) => {
    try {
      const result = await fetch(
        `${server}/api/comments?project_id=${project_id}`
      );
      const data = await result.json();
      setCommentsList(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   searchComment(projectDetails.project_id);
  // }, []);

  useEffect(() => {
    searchComment(projectDetails.project_id);
  }, [commentTrigger]);

  return (
    <>
      {commentsList &&
        commentsList.map((comment) => {
          return <CommentArticle comment={comment} key={uuidv4()} />;
        })}
    </>
  );
};

export default FeedbackList;
