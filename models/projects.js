const pool = require("../utils/pgsql_db");
const projectQueries = require("../queries/projectsQueries");

const getAllProjects = async (order, bootcamp) => {
  let data, orderQuery, bootcampQuery;
  // orderQuery
  if (order === "date") {
    orderQuery = " ORDER BY p.date";
  } else if (order === "curse") {
    orderQuery = " ORDER BY u.curse";
  } else if (order === "bootcamp") {
    orderQuery = " ORDER BY u.bootcamp";
  } else {
    orderQuery = "";
  }
  // bootcampQuery
  if (bootcamp === "cyber") {
    
  }

  try {
    const result = await pool.query(projectQueries.getAllProjects + orderQuery);
    data = result.rows;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getProjectById = async (project_id) => {
  let data;
  try {
    const result = await pool.query(projectQueries.getProjectById, [
      project_id,
    ]);
    data = result.rows;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getProjectByUser = async (user_id) => {
  let data;
  try {
    const result = await pool.query(projectQueries.getProjectByUser, [user_id]);
    data = result.rows;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getProjectsByUser = async () => {};

getAllProjects();
// getProjectById(4);
// getProjectByUser(3);
