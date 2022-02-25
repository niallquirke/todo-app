Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "number8",
  host: "localhost",
  post: 5432,
  database: "todoapp",
});

module.exports = pool;
