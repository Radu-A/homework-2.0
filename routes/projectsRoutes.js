const express = require("express");
const projectsRouter = express.Router();
const projectsController = require("../controllers/projectsController");

projectsRouter.get("/", projectsController.getAllProjects);
projectsRouter.get("/number", projectsController.getProjectsNumber);

module.exports = projectsRouter;
