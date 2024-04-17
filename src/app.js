import express, { json, urlencoded } from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes/auth.routes.js";
import { allowed_origin } from "./config.js";

const app = express();
app.disable("x-powered-by");

app.use(
  cors({
    origin: (origin, callback) => {
      allowed_origin;

      if (allowed_origin.includes(origin)) return callback(null, true);

      if (!origin) return callback(null, true);

      return callback(new Error("Not allowed by Cors"));
    },
    credentials: true,
  })
);

app.options("*", cors());

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// const allowedOrigins = config.allowed_origins;

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//       console.log("Not allowed by cors");
//     }
//   },
//   credentials: true,
// };

// app.use(cors(corsOptions));
// app.use("/api", cors(), router);
app.use("/api", router);

export default app;
