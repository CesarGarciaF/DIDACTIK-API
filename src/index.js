const app = require("./app.js");
const port = process.env.PORT;
const connectDB = require("./db.js");
const cloudinaryConnect = require("./cloudinary.js");

cloudinaryConnect;
connectDB();
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
