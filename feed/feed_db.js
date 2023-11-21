const pool = require("../db/pgsql_db");
const feedQueries = require("./feedQueries_db");

const createUsersTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.usersTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const createProyectsTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.projectsTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const createCommentsTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.commentsTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const insertUsers = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.insertUsers);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const insertProjects = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.insertProjects);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const insertComments = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.insertComments);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const nowDate = new Date();
let date = "";
if (nowDate.getMonth() + 1 < 10) {
  date =
    nowDate.getFullYear() +
    "-0" +
    (nowDate.getMonth() + 1) +
    "-" +
    nowDate.getDate();
} else {
  date =
    nowDate.getFullYear() +
    "-" +
    (nowDate.getMonth() + 1) +
    "-" +
    nowDate.getDate();
}

const feedDataBase = async () => {
  await createUsersTable();
  await createProyectsTable();
  await createCommentsTable();
  await insertUsers();
  await insertProjects();
  await insertComments();
};

feedDataBase();
