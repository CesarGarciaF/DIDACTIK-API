import { connect } from "mongoose";
import { uri } from "./config.js";

const connectDB = async () => {
  try {
    await connect(uri);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
