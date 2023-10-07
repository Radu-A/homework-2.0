const pool = require("../utils/pgsql_db");

const getAllProjects = async (order) => {
  let result, query;
  if (order === "date") {
    query = "ORDER BY date";
  } else if (order === "curse") {
    query = "ORDER BY curse";
  }
  try {
    const data = await pool.query(`SELECT * FROM projects ${query}`);
    result = data.rows;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return result;
};

const getProjectById = async () => {};

const getProjectsByUser = async () => {};

getAllProjects('curse');
