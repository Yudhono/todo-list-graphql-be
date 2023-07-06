const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "12QWaszx",
  host: "localhost",
  port: 5432,
  database: "todo-list",
});

module.exports = pool;
