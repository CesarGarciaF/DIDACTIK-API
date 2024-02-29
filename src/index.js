const app = require("./app.js");
const port = process.env.PORT;
const connectDB = require("./db.js");

connectDB();
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
