const commentsQueries = {
  getCommentByProject: `
    SELECT u.firstname, u.lastname, u.photo, u.bootcamp, c.date, c.text
    FROM comments AS c 
    JOIN users AS u
    ON u.user_id = c.user_id
    WHERE c.project_id = $1`,
  createComment: `
    INSERT INTO comments (
      user_id, project_id, text)
      VALUES ($1, $2, $3)`,
  updateComment: `
    UPDATE projects
    SET text = $2
    WHERE comment_id = $1`,
  deleteComment: `
    DELETE FROM comments
    WHERE comment_id = $1`,
};

module.exports = commentsQueries;
