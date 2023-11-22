const pool = require("../db/pgsql_db");
const likesQueries = require("../queries/likesQueries");

const getLike = async (user_id, project_id) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(likesQueries.getLike, [
      user_id,
      project_id,
    ]);
    const [data] = result.rows;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    client.release();
  }
};

const getLikesByProject = async (project_id) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(likesQueries.getLikesByProject, [
      project_id,
    ]);
    const data = result.rows;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const createLike = async (user_id, project_id) => {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(likesQueries.createLike, [
      user_id,
      project_id,
    ]);
    const data = result.rows;
    console.log({
      created: true,
      message: `User "${user_id}" likes ${project_id}`,
    });
    return {
      created: true,
      message: `User "${user_id}" likes ${project_id}`,
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

console.log(getLike("santivediap@gmail.com", 13));
