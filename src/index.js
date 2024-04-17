import app from "./app.js";
import connectDB from "./db.js";
import cloudinaryConnect from "./cloudinary.js";
const port = process.env.PORT;

cloudinaryConnect;
connectDB();
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
