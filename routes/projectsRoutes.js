const express = require("express");
const projectsController = require("../controllers/projectsController");
const projectsRouter = express.Router();

projectsRouter.get("/", projectsController.getAllProjects);
projectsRouter.get("/number", projectsController.getProjectsNumber);

module.exports = projectsRouter;
