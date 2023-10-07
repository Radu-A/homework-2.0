const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWORD,
  ssl: true,
});

module.exports = pool;
