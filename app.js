// require modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const projectsRouter = require('./routes/projectsRoutes')

// initialize express
const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log(`Your host is http://localhost:${port}`)
})

app.use('/api/projects', projectsRouter)
