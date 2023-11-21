const express = require("express");
const commentsRouter = express.Router();
const commentsController = require("../controllers/commentsController");

commentsRouter.get("/", commentsController.getCommentByProject);
commentsRouter.post("/", commentsController.createComment);
commentsRouter.put("/", commentsController.updateComment);
commentsRouter.delete("/", commentsController.deleteComment);

module.exports = commentsRouter;
