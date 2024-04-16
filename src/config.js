const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  uri: process.env.DB_MONGODB_URI,
  allowed_origins: process.env.ALLOWED_ORIGINS,
  allowed_origin: process.env.ALLOWED_ORIGIN,
  port: process.env.PORT,
  secret: process.env.SECRET,
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};
