const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const coockieParser = require("cookie-parser");
const router = require("./routes/auth.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coockieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api", router);

module.exports = app;
