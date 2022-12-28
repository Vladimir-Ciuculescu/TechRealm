const Pool = require("pg").Pool;

const env = require("dotenv");

env.config();

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;
