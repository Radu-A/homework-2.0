const pool = require("../utils/pgsql_db");
const projectQueries = require("../queries/projectsQueries");
const newProject = require("../utils/newProject");
const projectToUpdate = require("../utils/projectToUpdate");

const getProjectsNumber = async () => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(projectQueries.getProjectsNumber);
    [data] = result.rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return data;
};

const getAllProjects = async (bootcamp, finished, deployed, order, page) => {
  console.log("Before if/else");
  console.log(bootcamp);
  // declare variables
  let client,
    data,
    isBootcamp,
    bootcampQuery,
    isFinished,
    finishedQuery,
    deployedQuery,
    orderQuery,
    limitQuery;
  // bootcampQuery
  if (bootcamp === "cyber") {
    console.log(`bootcamp === "cyber"`);
    bootcampQuery = " WHERE u.bootcamp = 'Cybersecurity'";
    isBootcamp = true;
  } else if (bootcamp === "data") {
    bootcampQuery = " WHERE u.bootcamp = 'Data Science'";
    isBootcamp = true;
  } else if (bootcamp === "full") {
    bootcampQuery = " WHERE u.bootcamp = 'Full-Stack'";
    isBootcamp = true;
  } else if (bootcamp === "ux") {
    bootcampQuery = " WHERE u.bootcamp = 'UX/UI'";
    isBootcamp = true;
  } else {
    bootcampQuery = "";
  }
  // stateQuery
  if (!isBootcamp) {
    if (finished === true) {
      finishedQuery = " WHERE p.finished = 'true'";
      isFinished = true;
    } else if (finished === false) {
      finishedQuery = " WHERE p.finished = 'false'";
      isFinished = true;
    } else {
      finishedQuery = "";
    }
  } else {
    if (finished === "true") {
      finishedQuery = " AND p.finished = 'true'";
      isFinished = true;
    } else if (finished === "false") {
      finishedQuery = " AND p.finished = 'false'";
      isFinished = true;
    } else {
      finishedQuery = "";
    }
  }
  // deployedQuery
  if (!isBootcamp && !isFinished) {
    if (deployed === "true") {
      deployedQuery = " WHERE p.site IS NOT NULL";
    } else if (deployed === "false") {
      deployedQuery = " WHERE p.site IS NULL";
    } else {
      deployedQuery = "";
    }
  } else {
    if (deployed === "true") {
      deployedQuery = " AND p.site IS NOT NULL";
    } else if (deployed === "false") {
      deployedQuery = " AND p.site IS NULL";
    } else {
      deployedQuery = "";
    }
  }
  // orderQuery
  if (order === "date") {
    orderQuery = " ORDER BY p.date DESC";
  } else if (order === "curse") {
    orderQuery = " ORDER BY u.curse";
  } else if (order === "bootcamp") {
    orderQuery = " ORDER BY u.bootcamp";
  } else {
    orderQuery = " ORDER BY p.date DESC";
  }
  // limitQuery
  if (page) {
    const offset = (page - 1) * 5;
    limitQuery = ` LIMIT 5 OFFSET ${offset}`;
  } else {
    limitQuery = ''
  }

  console.log("Este es el reultado de la query");
  console.log(
    projectQueries.getAllProjects +
      bootcampQuery +
      finishedQuery +
      deployedQuery +
      orderQuery +
      limitQuery
  );

  try {
    // establish connection with database
    client = await pool.connect();
    // launch the query
    const result = await client.query(
      projectQueries.getAllProjects +
        bootcampQuery +
        finishedQuery +
        deployedQuery +
        orderQuery +
        limitQuery
    );
    // extract data from "rows" property of "results" object
    data = result.rows;
    console.log(data);

    console.log(
      projectQueries.getAllProjects +
        bootcampQuery +
        finishedQuery +
        deployedQuery +
        orderQuery +
        limitQuery
    );

    console.log(bootcamp, finished, deployed, order);
    console.log("bootcampQuery:");
    console.log(bootcampQuery);
  } catch (error) {
    console.log(error);
  } finally {
    // close the connection with database
    client.release();
  }
  return data;
};

const getProjectById = async (project_id) => {
  let client, data;
  try {
    // establish connection with database
    client = await pool.connect();
    // launch the query
    const result = await client.query(projectQueries.getProjectById, [
      project_id,
    ]);
    data = result.rows;
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    // close the connection with database
    client.release();
  }
  return data;
};

const getProjectstByUser = async (user_id) => {
  let client, data;
  try {
    // establish connection with database
    client = await pool.connect();
    // launch the query
    const result = await client.query(projectQueries.getProjectByUser, [
      user_id,
    ]);
    data = result.rows;
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    // close the connection with database
    client.release();
  }
  return data;
};

const createProject = async (project) => {
  let client, result;
  const {
    user_id,
    title,
    date,
    type,
    description,
    achievement_one,
    achievement_two,
    achievement_three,
    finished,
    pending_one,
    pending_two,
    pending_three,
    img_small,
    img_big,
    github,
    site,
  } = project;
  try {
    // establish connetion with database
    client = await pool.connect();
    // launch the query
    result = await client.query(projectQueries.createProject, [
      user_id,
      title,
      date,
      type,
      description,
      achievement_one,
      achievement_two,
      achievement_three,
      finished,
      pending_one,
      pending_two,
      pending_three,
      img_small,
      img_big,
      github,
      site,
    ]);
    console.log(`Project "${title}" created`);
  } catch (error) {
    console.log(error);
  } finally {
    // close database connection
    client.release();
  }
  return result;
};

const updateProject = async (project) => {
  let client, result;
  const {
    project_id,
    title,
    date,
    type,
    description,
    achievement_one,
    achievement_two,
    achievement_three,
    finished,
    pending_one,
    pending_two,
    pending_three,
    img_small,
    img_big,
    github,
    site,
  } = project;
  try {
    // establish with connection database
    client = await pool.connect();
    result = await client.query(projectQueries.updateProject, [
      title,
      date,
      type,
      description,
      achievement_one,
      achievement_two,
      achievement_three,
      finished,
      pending_one,
      pending_two,
      pending_three,
      img_small,
      img_big,
      github,
      site,
      project_id,
    ]);
    console.log({
      message: `Project with id ${project_id} updated.`,
    });
  } catch (error) {
    console.log(error);
  } finally {
    // close database connection
    client.release();
  }
  return result;
};

const deleteProject = async (project_id) => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(projectQueries.deleteProject, [project_id]);
    console.log({
      message: `Project with id ${project_id} deleted.`,
    });
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return result;
};

// getAllProjects("cyber", true, true, 'date');
// getAllProjects();
// getProjectById(4);
// getProjectstByUser(3);
// createProject(newProject);
// updateProject(projectToUpdate);
// deleteProject(17);

module.exports = {
  getProjectsNumber,
  getAllProjects,
  getProjectById,
  getProjectstByUser,
  createProject,
  updateProject,
  deleteProject,
};
