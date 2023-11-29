const commentsModel = require("../models/commentsModel");

const getCommentByProject = async (req, res) => {
  try {
    const data = await commentsModel.getCommentByProject(req.query.project_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const createComment = async (req, res) => {
  console.log(req.body);
  try {
    const data = await commentsModel.createComment({
      user_id: req.body.user_id,
      project_id: req.body.project_id,
      text: req.body.text,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const updateComment = async (req, res) => {
  try {
    const data = await commentsModel.updateComment({
      comment_id: req.body.comment_id,
      text: req.body.text,
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

const deleteComment = async (req, res) => {
  try {
    const data = await commentsModel.updateComment(req.body.comment_id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

module.exports = {
  getCommentByProject,
  createComment,
  updateComment,
  deleteComment,
};
