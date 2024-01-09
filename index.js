// require modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usersRouter = require("./routes/usersRoutes");
const projectsRouter = require("./routes/projectsRoutes");
const commentsRouter = require("./routes/commentsRoutes");
const likesRouter = require("./routes/likesRoutes");

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
app.get("/", (req, res) => {
  res.send(`
  <html>
    <head>
      <title>Homework - Server</title>
    </head>
    <body>
      <h1>Welcome to Homework Server</h1>
      <ul title="Endpoints">
        <li>/api/users</li>
        <li>/api/projects</li>
      </ul>
    </body>
  </html>
`);
});
app.use("/api/users", usersRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/likes", likesRouter);
