const express = require("express");
const commentsRouter = express.Router();
const commentsController = require("../controllers/commentsController");

commentsRouter.get("/", commentsController.getCommentByProject);

module.exports = commentsRouter;
