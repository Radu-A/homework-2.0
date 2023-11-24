import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useRef } from "react";
import { ProjectDetailsContext } from "../../../../context/projectDetailsContext";

const NewCommentForm = () => {
  // variables
  const server = import.meta.env.VITE_SERVER;
  const { user } = useAuth0();
  let userId;
  if (user) {
    userId = user.sub;
  }
  const myRef = useRef(null);

  // context
  const { projectDetails, updateCommentTrigger } = useContext(
    ProjectDetailsContext
  );

  // functions
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth" });

  const createComment = async (comment) => {
    try {
      const result = await fetch(`${server}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comment = {
      user_id: userId,
      project_id: projectDetails.project_id,
      text: event.target.text.value,
    };
    await createComment(comment);
    await updateCommentTrigger();
  };

  // useEffect

  useEffect(() => {
    if (window.location.hash === "#comment") {
      setTimeout(() => {
        executeScroll();
      }, 150);
    }
  }, []);

  return (
    <form
      className="new-comment-form"
      id="new-comment-form"
      onSubmit={handleSubmit}
    >
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="10"
        maxLength={5000}
        placeholder="Let us know what you think"
        ref={myRef}
      ></textarea>
      <div>
        <label htmlFor="text">Comment here</label>
        <button>SEND</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
