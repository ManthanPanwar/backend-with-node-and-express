const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node_complete",
  password: "monuboss",
});

module.exports = pool.promise();
