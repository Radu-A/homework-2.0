const pool = require("./pgsql_db");
const feedQueries = require("./feedQueries_db");

const dropCommentsTable = async () => {
  let client, result;
  try {
    client = await pool.connect();
    result = await client.query(feedQueries.dropCommentsTable);
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
  return result;
};

dropCommentsTable();
