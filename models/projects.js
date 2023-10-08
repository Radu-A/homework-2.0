const pool = require("../utils/pgsql_db");
const projectQueries = require("../queries/projectsQueries");

const getAllProjects = async (bootcamp, state, deployed, order) => {
  // declare variables
  let client,
    data,
    isBootcamp,
    bootcampQuery,
    isState,
    stateQuery,
    deployedQuery,
    orderQuery;
  // bootcampQuery
  if (bootcamp === "cyber") {
    bootcampQuery = " WHERE u.bootcamp = 'Cybersecurity'";
    isBootcamp = true;
  } else if (bootcamp === "data") {
    bootcampQuery = " WHERE u.bootcamp = 'Data Science'";
    isBootcamp = true;
  } else if (bootcamp === "full") {
    bootcampQuery = " WHERE u.bootcamp = 'Full-Stack'";
  } else if (bootcamp === "ux") {
    bootcampQuery = " WHERE u.bootcamp = 'UX/UI'";
  } else {
    bootcampQuery = "";
  }
  // stateQuery
  if (!isBootcamp) {
    if (state === true) {
      stateQuery = " WHERE p.finished = 'true'";
      isState = true;
    } else if (state === false) {
      stateQuery = " WHERE p.finished = 'false'";
      isState = true;
    } else {
      stateQuery = "";
    }
  } else {
    if (state === true) {
      stateQuery = " AND p.finished = 'true'";
      isState = true;
    } else if (state === false) {
      stateQuery = " AND p.finished = 'false'";
      isState = true;
    } else {
      stateQuery = "";
    }
  }
  // deployedQuery
  if (!isBootcamp || !isState) {
    if (deployed === true) {
      deployedQuery = " WHERE p.site IS NOT NULL";
    } else if (deployed === false) {
      deployedQuery = " WHERE p.SITE IS NULL";
    } else {
      deployedQuery = "";
    }
  } else {
    if (deployed === true) {
      deployedQuery = " AND p.site IS NOT NULL";
    } else if (state === false) {
      deployedQuery = " AND p.site IS NULL";
    } else {
      deployedQuery = "";
    }
  }
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

  try {
    // establish connection with database
    client = await pool.connect();
    // launch the query
    const result = await client.query(
      projectQueries.getAllProjects +
        bootcampQuery +
        stateQuery +
        deployedQuery +
        orderQuery
    );
    // extract data from "rows" property of "results" object
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
    console.log(`Project "${project_id}" created`);
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
    client = await pool.connect()
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
    client.release()
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

const newProject = {
  user_id: 5,
  title: "Network Atack",
  date: "2023-06-01",
  type: "Network Security",
  description:
    "Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed.",
  achievement_one:
    "Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.",
  achievement_two:
    "Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.",
  achievement_three:
    "Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.",
  finished: "false",
  pending_one:
    "Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti.",
  pending_two:
    "Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.",
  pending_three:
    "Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.",
  img_small: null,
  img_big:
    "https://www.itarian.com/images/what-is-network-vulnerability-assessment.png",
  github: "https://github.com/Radu-A/web-personal",
  site: null,
};

const projectToUpdate = {
  project_id: 14,
  title: "Víctor Atack",
  date: "2023-06-01",
  type: "Network Security",
  description:
    "Pellentesque semper convallis magna sit amet varius. Vestibulum vel risus tempus, mattis orci at, sagittis diam. Curabitur fermentum ex quam, ac pulvinar mauris vehicula eu. Pellentesque porta quis libero elementum porta. Nunc interdum eros neque, non feugiat ex consectetur sed.",
  achievement_one:
    "Sed sit amet porttitor diam, id sodales ante. In quis elit arcu. Pellentesque sed efficitur neque.",
  achievement_two:
    "Vestibulum suscipit, massa et commodo porta, dolor sem tincidunt tellus, sit amet ultrices elit ipsum ut tellus. Suspendisse sagittis magna dictum, malesuada lorem ac, euismod elit.",
  achievement_three:
    "Aliquam sagittis mollis leo. Maecenas et nibh ac erat sagittis luctus. Ut ultrices sagittis venenatis.",
  finished: "false",
  pending_one:
    "Morbi vitae eleifend lectus, vel rhoncus tortor. Curabitur posuere urna aliquet leo maximus porttitor. Suspendisse potenti.",
  pending_two:
    "Vivamus aliquam at augue in commodo. Nullam porttitor at mi at vestibulum. In hac habitasse platea dictumst. Ut ullamcorper est in felis aliquam scelerisque. Nunc bibendum faucibus sem vitae aliquet.",
  pending_three:
    "Vivamus ac lectus nunc. Fusce ac leo id enim sagittis aliquam id at neque.",
  img_small: null,
  img_big:
    "https://www.itarian.com/images/what-is-network-vulnerability-assessment.png",
  github: "https://github.com/Radu-A/web-personal",
  site: null,
};

// getAllProjects("data", false, true, 'date');
// getAllProjects();
// getProjectById(4);
// getProjectstByUser(3);
// createProject(newProject);
// updateProject(projectToUpdate);
// deleteProject(14);
