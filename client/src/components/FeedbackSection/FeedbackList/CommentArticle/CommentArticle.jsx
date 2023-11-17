import { format, compareAsc, formatDistance } from "date-fns";

const CommentArticle = ({ comment }) => {
  const commentDate = new Date(comment.date);
  const nowDate = new Date();

  const distance = formatDistance(nowDate, commentDate);
  console.log(distance);

  return (
    <article className="comment-article">
      <img src={comment.photo} alt="" />
      <div className="comment-info">
        <p>
          <strong>
            {comment.firstname} {comment.lastname}{" "}
          </strong>{" "}
          {comment.bootcamp}
        </p>
        <p>{distance}</p>
      </div>
      <div className="comment-body">
        <p>{comment.text}</p>
      </div>
    </article>
  );
};

export default CommentArticle;
