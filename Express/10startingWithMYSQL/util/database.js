const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_complete",
  password: "monuboss",
  debug: true, // This will output MySQL logs to the console
});

module.exports = pool.promise();
