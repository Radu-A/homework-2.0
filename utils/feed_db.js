const pool = require("../utils/pgsql_db");
const queries = require("./queries_db");

const createUsersTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(queries.usersTable);
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
    result = await client.query(queries.projectsTable);
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
    result = await client.query(queries.inserUsers);
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
    result = await client.query(queries.insertProjects);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
};

const feedDataBase = async () => {
  await createUsersTable();
  await createProyectsTable();
  await insertUsers();
  await insertProjects();
};

feedDataBase();
