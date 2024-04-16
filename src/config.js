const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  uri: process.env.DB_MONGODB_URI,
  port: process.env.PORT,
  secret: process.env.SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};
