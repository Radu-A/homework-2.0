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
  console.log("body en createProject");
  console.log(req.body);
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

const updateProject = async (req, res) => {
  try {
    const data = await projectsModel.updateProject(req.body);
    res.status(200).json({
      message: `${data.message}`,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

const deleteProject = async (req, res) => {
  try {
    const data = await projectsModel.deleteProject(req.query.project_id);
    res.status(200).json({
      message: `Project "${req.body.title}" deleted`,
    });
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
  updateProject,
  deleteProject,
};
