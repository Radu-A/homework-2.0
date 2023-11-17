const pool = require("../utils/pgsql_db");
const feedQueries = require("./feedQueries_db");

const dropUsersTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.dropUsersTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return result;
};

const dropProjectsTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.dropProjectsTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return result;
};

const dropCommentsTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.dropCommentsTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return result;
};

const dropAllTables = async () => {
  const resultComments = await dropCommentsTable();
  const resultProjects = await dropProjectsTable();
  const resultUsers = await dropUsersTable();
  return { resultProjects, resultUsers };
};

dropAllTables();
