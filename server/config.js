const dotenv = require("dotenv");
const result = dotenv.config()

if (result.error) {
  throw result.error
}

//console.log(result.parsed)
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
