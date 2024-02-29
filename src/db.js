const mongoose = require("mongoose");
const config = require("./config.js");

const connectDB = async () => {
  try {
    await mongoose.connect(config.uri);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
