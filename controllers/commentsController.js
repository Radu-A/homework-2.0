const commentsModel = require("../models/commentsModel");

const getCommentByProject = async (req, res) => {
  try {
    const data = await commentsModel.getCommentByProject(
      req.query.project_id
    );
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

module.exports = { getCommentByProject };
