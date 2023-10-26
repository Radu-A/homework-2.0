const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");

usersRouter.get("/", usersController.getUsers);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/", usersController.updateUser);
usersRouter.delete("/", usersController.deleteUser);

module.exports = usersRouter;
