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
    console.log("Esto es deployed en el controller");
    console.log(req.query.deployed);
    console.log("Esto es finished en el controller");
    console.log(req.query.finished);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error,
    });
    console.log(error);
  }
};

module.exports = {
  getProjectsNumber,
  getAllProjects,
};
