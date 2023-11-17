const pool = require("../utils/pgsql_db");
const commentsQueries = require("../queries/commentsQueries");

const getCommentByProject = async (project_id) => {
  console.log(project_id)
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(commentsQueries.getCommentByProject, [
      project_id,
    ]);
    data = result.rows;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    client.release();
  }
};

module.exports = {getCommentByProject}