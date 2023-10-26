// require modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const projectsRouter = require("./routes/projectsRoutes");
const usersRouter = require("./routes/usersRoutes");

// initialize express
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Your host is http://localhost:${port}`);
});

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/projects", projectsRouter);
app.use("/api/users", usersRouter);
