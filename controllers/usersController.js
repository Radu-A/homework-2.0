const usersModel = require("../models/usersModel");

const getUsers = async (req, res) => {
  try {
    if (req.query.user_id) {
      const data = await usersModel.getUserById(req.query.user_id);
      res.status(200).json(data);
    } else {
      const data = await usersModel.getAllUsers();
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const data = await usersModel.createUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const data = await usersModel.updateUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const data = await usersModel.deleteUser(req.body.user_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
