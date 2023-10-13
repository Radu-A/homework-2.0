const projectsModel = require("../models/projectsModel");

const getAllProjects = async (req, res) => {
  try {
    const data = await projectsModel.getAllProjects(
      req.query.bootcamp,
      req.query.state,
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

module.exports = {
  getAllProjects,
};
