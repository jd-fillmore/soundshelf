const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "jk123",
  host: "localhost",
  port: 5432,
  database: "demoDB",
});

module.exports = pool;
