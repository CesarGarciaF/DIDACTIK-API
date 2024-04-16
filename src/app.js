const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const router = require("./routes/auth.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  // "http://localhost:5173",
  "https://didacti-k.onrender.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
      console.log("Not allowed by cors");
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       const isAllowed = allowedOrigins.includes(origin);
//       callback(null, isAllowed || !origin);
//     },
//     credentials: true,
//   })
// );

app.use("/api", cors(corsOptions), router);

module.exports = app;
