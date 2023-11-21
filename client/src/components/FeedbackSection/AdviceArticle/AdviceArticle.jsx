import React from "react";

const AdviceArticle = () => {
  return (
    <article className="advice-article">
        <h4>Leave some feedback on this project</h4>
        <p>
          Please focus on giving high-quality, helpful feedback and answering
          any pending issues Radu-A might have. Here are some key points to
          consider:
        </p>
        <ul>
          <li>
            <p>Does the solution include semantic HTML?</p>
          </li>
          <li>
            <p>Is it accessible, and what improvements could be made?</p>
          </li>
          <li>
            <p>Does the layout look good on a range of screen sizes?</p>
          </li>
          <li>
            <p>Is the code well-structured, readable, and reusable?</p>
          </li>
        </ul>
      </article>
  );
};

export default AdviceArticle;
