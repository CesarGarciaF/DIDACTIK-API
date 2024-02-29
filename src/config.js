const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  uri: process.env.DB_MONGODB_URI,
  port: process.env.PORT,
  secret: process.env.SECRET,
};
