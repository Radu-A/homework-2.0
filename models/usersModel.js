const pool = require("../utils/pgsql_db");
const usersQueries = require("../queries/usersQueries");
const projectQueries = require("../queries/projectsQueries");
const newUser = require("../utils/newUser");
const userToUpdate = require("../utils/userToUpdate");

const getAllUsers = async () => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(usersQueries.getAllUsers);
    data = result.rows;
    // console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return data;
};

const getUserById = async (user_id) => {
  let client, data;
  try {
    client = await pool.connect();
    const result = await client.query(usersQueries.getUserById, [user_id]);
    data = result.rows;
    // console.log(data);
  } catch (error) {
    console.log(data);
  } finally {
    client.release();
  }
  return data;
};

const createUser = async (user) => {
  let client, data;
  const {
    user_id,
    email,
    photo,
    firstname,
    lastname,
    bootcamp,
    curse,
    github,
  } = user;
  try {
    client = await pool.connect();
    data = await client.query(usersQueries.createUser, [
      user_id,
      email,
      photo,
      firstname,
      lastname,
      bootcamp,
      curse,
      github,
    ]);
    console.log(`User "${email}" created`);
    return `User "${email}" created`;
  } catch (error) {
    console.log(error);
    return error;
  } finally {
    client.release();
  }
};

const updateUser = async (user) => {
  let client, data;
  const {
    user_id,
    email,
    photo,
    firstname,
    lastname,
    bootcamp,
    curse,
    github,
  } = user;
  try {
    client = await pool.connect();
    data = await client.query(usersQueries.updateUser, [
      user_id,
      email,
      photo,
      firstname,
      lastname,
      bootcamp,
      curse,
      github,
    ]);
    console.log(`User "${email}" updated`);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return `User "${email}" updated`;
};

const deleteUser = async (user_id) => {
  let client, data;
  try {
    client = await pool.connect();
    data = await client.query(usersQueries.deleteUser, [user_id]);
    console.log(`User with id ${user_id} deleted.`);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return `User with id ${user_id} deleted.`;
};

// getAllUsers();
// getUserById("debra.rodriquez@example.com");
// createUser(newUser);
// updateUser(userToUpdate);
// deleteUser("aerozedits@gmail.com");

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
