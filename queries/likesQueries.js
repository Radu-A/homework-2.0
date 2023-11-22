const likesQueries = {
  getLike: `
    SELECT * FROM likes
    WHERE user_id = $1
    AND project_id = $2`,
  getLikesByProject: `
    SELECT COUNT (*) FROM likes 
    WHERE project_id = $1`,
  createLike: `
    INSERT INTO likes (user_id, project_id)
    VALUES ($1, $2)`,
  deleteLike: `
    DELETE FROM likes
    WHERE user_id = $1
    AND project_id = $2`,
};

module.exports = likesQueries;
