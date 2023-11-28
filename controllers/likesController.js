const likesModel = require("../models/likesModel");

const getLike = async (req, res) => {
  const user_id = req.query.user_id;
  const project_id = req.query.project_id;
  try {
    const data = await likesModel.getLike(user_id, project_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const getLikesByProject = async (req, res) => {
  const project_id = req.query.project_id;
  try {
    const data = await likesModel.getLikesByProject(project_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const createLike = async (req, res) => {
  const user_id = req.body.user_id;
  const project_id = req.body.project_id;
  try {
    const data = await likesModel.createLike(user_id, project_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      created: false,
      message: error,
    });
  }
};

const deleteLike = async (req, res) => {
  const user_id = req.body.user_id;
  const project_id = req.body.project_id;
  try {
    const data = await likesModel.deleteLike(user_id, project_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      deleted: false,
      message: error,
    });
  }
};

module.exports = {
  getLike,
  getLikesByProject,
  createLike,
  deleteLike,
};
