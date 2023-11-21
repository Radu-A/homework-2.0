const pool = require("../db/pgsql_db");
const commentsQueries = require("../queries/commentsQueries");

const getCommentByProject = async (project_id) => {
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

const createComment = async (comment) => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(commentsQueries.createComment, [
      comment.user_id,
      comment.project_id,
      comment.text,
    ]);
    data = result.rows;
    return {
      created: true,
      message: `Comment created`,
    };
  } catch (error) {
    console.log(error);
    return {
      created: false,
      message: error,
    };
  } finally {
    client.release();
  }
};

const updateComment = async (comment) => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(commentsQueries.updateComment, [
      comment.comment_id,
      comment.text,
    ]);
    data = result.rows;
    return {
      updated: true,
      message: "Comment updated",
    };
  } catch (error) {
    console.log(error);
    return {
      updated: false,
      message: error,
    };
  } finally {
    client.release();
  }
};

const deleteComment = async (comment_id) => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(commentsQueries.deleteComment, [
      comment.comment_id,
    ]);
    data = result.rows;
    return {
      deleted: true,
      message: "Comment deleted",
    };
  } catch (error) {
    console.log(error);
    return {
      deleted: false,
      message: error,
    };
  } finally {
    client.release();
  }
};

module.exports = {
  getCommentByProject,
  createComment,
  updateComment,
  deleteComment,
};
