const express = require("express");
const likesRouter = express.Router();
const likesController = require("../controllers/likesController");

likesRouter.get("/", likesController.getLike);
likesRouter.get("/count", likesController.getLikesByProject);

likesRouter.post("/", likesController.createLike);

likesRouter.delete("/", likesController.deleteLike);

module.exports = likesRouter;
