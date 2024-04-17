import { v2 as cloudinary } from "cloudinary";
import { cloud_name as _cloud_name, api_key as _api_key, api_secret as _api_secret } from "./config.js";

const cloudinaryConnect = cloudinary.config({
  cloud_name: _cloud_name,
  api_key: _api_key,
  api_secret: _api_secret,
  secure: true,
  sameSite: "None",
});

export default cloudinaryConnect;
