const projectsModel = require("../models/projectsModel");

const getProjectsNumber = async (req, res) => {
  try {
    const data = await projectsModel.getProjectsNumber();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const getAllProjects = async (req, res) => {
  try {
    const data = await projectsModel.getAllProjects(
      req.query.bootcamp,
      req.query.finished,
      req.query.deployed,
      req.query.order,
      req.query.page
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const getProjectsByUser = async (req, res) => {
  try {
    const data = await projectsModel.getProjectstByUser(req.query.user_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const createProject = async (req, res) => {
  try {
    const data = await projectsModel.createProject(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.statut(404).json({
      message: error,
    });
    console.log(error);
  }
};

module.exports = {
  getProjectsNumber,
  getAllProjects,
  getProjectsByUser,
  createProject,
};
