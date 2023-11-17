const commentsQueries = {
  getCommentByProject: `
    SELECT u.firstname, u.lastname, u.photo, u.bootcamp, c.date, c.text
    FROM comments AS c 
    JOIN users AS u
    ON u.user_id = c.user_id
    WHERE c.project_id = $1`,
};

module.exports = commentsQueries;
