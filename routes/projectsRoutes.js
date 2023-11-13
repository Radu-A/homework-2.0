const express = require("express");
const projectsRouter = express.Router();
const projectsController = require("../controllers/projectsController");

projectsRouter.get("/", projectsController.getAllProjects);
projectsRouter.get("/user", projectsController.getProjectsByUser);
projectsRouter.get("/number", projectsController.getProjectsNumber);

projectsRouter.post("/", projectsController.createProject);

projectsRouter.delete("/", projectsController.deleteProject);

module.exports = projectsRouter;
