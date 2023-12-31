const pool = require("../db/pgsql_db");
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

const getAllProjects = async (
  bootcamp,
  finished,
  deployed,
  keyword,
  order,
  page
) => {
  // declare variables
  if (keyword) {
    keyword = keyword.toLowerCase();
  }
  console.log("keyword");
  console.log(keyword);
  let client,
    data,
    isBootcamp,
    bootcampQuery,
    isFinished,
    finishedQuery,
    deployedQuery,
    keywordQuery,
    isDeployed,
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
    if (finished === "true") {
      finishedQuery = " WHERE p.finished = 'true'";
      isFinished = true;
    } else if (finished === "false") {
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
      isDeployed = true;
    } else if (deployed === "false") {
      deployedQuery = " WHERE p.site IS NULL";
      isDeployed = true;
    } else {
      deployedQuery = "";
    }
  } else {
    if (deployed === "true") {
      deployedQuery = " AND p.site IS NOT NULL";
      isDeployed = true;
    } else if (deployed === "false") {
      deployedQuery = " AND p.site IS NULL";
      isDeployed = true;
    } else {
      deployedQuery = "";
    }
  }
  // keywordQuery
  if (!isBootcamp && !isFinished && !isDeployed && keyword) {
    keywordQuery = ` WHERE LOWER(p.title) LIKE '%${keyword}%'
    OR LOWER(p.description) LIKE '%${keyword}%'
    OR LOWER(u.bootcamp) LIKE '%${keyword}%'
    OR LOWER(p.type) LIKE '%${keyword}%'`;
  } else if ((isBootcamp || isFinished || isDeployed) && keyword) {
    keywordQuery = ` AND LOWER(p.title) LIKE '%${keyword}%'`;
  } else {
    keywordQuery = "";
  }
  // orderQuery
  if (order === "curse") {
    orderQuery = " ORDER BY u.curse DESC";
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
    limitQuery = "";
  }

  try {
    // feedback for development
    console.log("This is the query");
    console.log(
      projectQueries.getAllProjects +
        bootcampQuery +
        finishedQuery +
        deployedQuery +
        keywordQuery +
        orderQuery +
        limitQuery
    );
    // console.log(bootcamp, finished, deployed, order);
    // establish connection with database
    client = await pool.connect();
    // launch the query
    const result = await client.query(
      projectQueries.getAllProjects +
        bootcampQuery +
        finishedQuery +
        deployedQuery +
        keywordQuery +
        orderQuery +
        limitQuery
    );
    // extract data from "rows" property of "results" object
    data = result.rows;
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
    return data;
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    // close the connection with database
    client.release();
  }
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
  const nowDate = new Date();
  let date = "";

  if (nowDate.getMonth() + 1 < 10) {
    if (nowDate.getDate() < 10) {
      date =
        nowDate.getFullYear() +
        "-0" +
        (nowDate.getMonth() + 1) +
        "-0" +
        nowDate.getDate();
    } else {
      date =
        nowDate.getFullYear() +
        "-0" +
        (nowDate.getMonth() + 1) +
        "-" +
        nowDate.getDate();
    }
  } else {
    if (nowDate.getDate() < 10) {
      date =
        nowDate.getFullYear() +
        "-" +
        (nowDate.getMonth() + 1) +
        "-0" +
        nowDate.getDate();
    } else {
      date =
        nowDate.getFullYear() +
        "-" +
        (nowDate.getMonth() + 1) +
        "-" +
        nowDate.getDate();
    }
  }
  let client, data;
  const {
    user_id,
    title,
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
    data = await client.query(projectQueries.createProject, [
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
    return {
      created: true,
      message: `Project "${title}" created`,
    };
  } catch (error) {
    console.log(error);
    return {
      created: false,
      message: error,
    };
  } finally {
    // close database connection
    client.release();
  }
};

const updateProject = async (project) => {
  let client, data;
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
    data = await client.query(projectQueries.updateProject, [
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
      message: `Project "${title}" updated.`,
    });
    console.log(project_id);
    console.log(projectQueries.updateProject);
    return {
      updated: true,
      message: `Project "${title}" updated.`,
    };
  } catch (error) {
    console.log(error);
    return {
      updated: false,
      message: error,
    };
  } finally {
    // close database connection
    client.release();
  }
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
