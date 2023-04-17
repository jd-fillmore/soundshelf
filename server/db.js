const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "jk123",
  host: "localhost",
  port: 5432,
  database: "albums",
});

module.exports = pool;
