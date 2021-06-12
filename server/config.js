const dotenv = require("dotenv");
dotenv.config();
// Single source to handle all the env vars
module.exports = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  pcoUser: process.env.PCO_USER,
  pcoKey: process.env.PCO_KEY,
};
